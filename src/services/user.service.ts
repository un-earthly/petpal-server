import { PrismaClient } from '@prisma/client';
import ApiError from '../error/ApiError';
import httpStatus from 'http-status';
import { hashPass } from '../utils/hashing';

const prisma = new PrismaClient();

export function getUserProfile(userId: number) {
    return prisma.user.findUnique({ where: { id: userId } });
}


export async function updateUserProfile(userId: number, updatedData: any) {
    const existingUserData = await prisma.user.findUnique({
        where: { id: userId },
    });

    if (!existingUserData) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }

    const data = await prisma.user.update({
        where: { id: userId },
        data: updatedData,
    });
    return data
}

export async function updateUserPassword(userId: number, newPassword: string) {
    const hashedPassword = await hashPass(newPassword)
    return prisma.user.update({
        where: { id: userId },
        data: { password: hashedPassword },
    });
}

export function deleteUserAccount(userId: number) {
    return prisma.user.delete({
        where: {
            id: userId
        }
    });
}

