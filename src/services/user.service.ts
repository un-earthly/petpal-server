import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import IUser from '../interfaces/user.interface';
import ApiError from '../error/ApiError';
import httpStatus from 'http-status';

const prisma = new PrismaClient();

export function getUserProfile(userId: number) {
    return prisma.user.findUnique({ where: { id: userId } });
}


export async function updateUserProfile(userId: number, updatedData: IUser) {
    const existingUserData = await prisma.user.findUnique({
        where: { id: userId },
    });

    if (!existingUserData) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }

    const data = await prisma.user.update({
        where: { id: userId },
        data: {
            address: updatedData.address,
            description: updatedData.description,
            firstName: updatedData.firstName,
            email: updatedData.email,
            lastName: updatedData.lastName,
            notificationsEnabled: updatedData.notificationsEnabled,
            phoneNumber: updatedData.phoneNumber,
            profileImage: updatedData.profileImage,
        },
    });
    return data
}

export function updateUserPassword(userId: number, newPassword: string) {
    const hashedPassword = bcrypt.hashSync(newPassword, 10);
    return prisma.user.update({
        where: { id: userId },
        data: { password: hashedPassword },
    });
}

export function deleteUserAccount(userId: number) {
    return prisma.user.delete({ where: { id: userId } });
}

export function getUserBookings(userId: number) {
    return prisma.booking.findMany({ where: { userId: userId } });
}
