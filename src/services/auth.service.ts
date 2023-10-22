import { PrismaClient } from '@prisma/client';
import { generateToken } from '../middlewares/token';
import IUser, { IUserRolesEnum } from '../interfaces/user.interface';
import mapUserRoleToEnum from '../utils/MapUserRoles';
import { hashPass, verifyPassword } from '../utils/hashing';
const prisma = new PrismaClient();

export async function loginUser(userData: Partial<IUser>) {
    const user = await prisma.user.findUnique({
        where: {
            email: userData.email,
        },
    });

    if (!user) {
        throw new Error('User not found');
    }

    const passwordMatch = await verifyPassword(user.password, userData.password!)

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

export async function registerUser(data: IUser) {
    const hashedPassword = await hashPass(data.password)

    const user = await prisma.user.create({
        data: {
            email: data.email,
            password: hashedPassword,
            firstName: data.firstName,
            lastName: data.lastName,
            role: mapUserRoleToEnum(data.role),
            profileImage: data.profileImage,
            phoneNumber: data.phoneNumber,
            address: data.address,
            description: data.description,
            notificationsEnabled: data.notificationsEnabled,
        }
    });
    const token = generateToken({ email: user.email, id: user.id, role: mapUserRoleToEnum(user.role) })
    return { data, token }
}
