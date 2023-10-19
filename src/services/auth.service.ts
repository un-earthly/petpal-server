import { PrismaClient } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import { generateToken } from '../middlewares/token';
import IUser, { IUserRolesEnum } from '../interfaces/user.interface';

const prisma = new PrismaClient();

export async function loginUser(email: string, password: string) {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!user) {
        throw new Error('User not found');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
        throw new Error('Invalid password');
    }

    const roleEnum: IUserRolesEnum = mapUserRoleToEnum(user.role);
    const token = generateToken({
        email: user.email,
        id: user.id,
        role: roleEnum,
    });

    return { token, user };
}

export async function registerUser(data: IUser): Promise<void> {
    const hashedPassword = await hash(data.password, 10);

    const user = await prisma.user.create({
        data: {
            ...data,
            role: mapUserRoleToEnum(data.role),
            password: hashedPassword,
        }
  });
}

function mapUserRoleToEnum(userRole: string): IUserRolesEnum {
    switch (userRole) {
        case 'ADMIN':
            return IUserRolesEnum.ADMIN;
        case 'SUPER_ADMIN':
            return IUserRolesEnum.SUPER_ADMIN;
        case 'USER':
            return IUserRolesEnum.USER;
        default:
            throw new Error('Invalid user role');
    }
}

