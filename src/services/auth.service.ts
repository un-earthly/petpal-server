import { PrismaClient } from '@prisma/client';
import { generateToken } from '../middlewares/token';
import IUser, { IUserRolesEnum } from '../interfaces/user.interface';
import mapUserRoleToEnum from '../utils/MapUserRoles';
import { hashPass, verifyPassword } from '../utils/hashing';
import ApiError from '../error/ApiError';
import httpStatus from 'http-status';
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
    const existing = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    })
    if (existing) {
        throw new ApiError(httpStatus.CONFLICT, 'User with this email already exists')
    }

    if (!data.name) {
        throw new ApiError(httpStatus.NOT_FOUND, "Please Enter A Valid Name")
    }
    if (!data.password) {
        throw new ApiError(httpStatus.NOT_FOUND, "Please Enter A Valid Password")
    }
    if (!data.email) {
        throw new ApiError(httpStatus.NOT_FOUND, "Please Enter A Valid Email")
    }
    const user = await prisma.user.create({
        data: {
            email: data.email,
            password: hashedPassword,
            name: data.name,
            role: mapUserRoleToEnum(data.role)
        }
    });
    const token = generateToken({ email: user.email, id: user.id, role: mapUserRoleToEnum(user.role) })
    return { user, token }
}
