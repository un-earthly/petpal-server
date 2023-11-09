import { PrismaClient } from "@prisma/client";
import IBooking from "../interfaces/booking.interface";
import ApiError from "../error/ApiError";
import httpStatus from "http-status";

const prisma = new PrismaClient();

export const bookingServices = {

    getUserBookings: (userId: number) => {
        const bookings = prisma.booking.findMany({
            where: {
                userId: userId
            }
        });
        return bookings
    },
    addBooking: (data: Partial<IBooking>) => {
        if (!data.userId || !data.serviceId || !data.timeSlotId) {
            throw new ApiError(httpStatus.BAD_REQUEST, "Please provide valid data for userId, serviceId, and timeSlotId.");
        }
        const newBooking = prisma.booking.create({
            data: {
                userId: data.userId!,
                timeSlotId: data.timeSlotId!,
                serviceId: data.serviceId!
            }
        })
        return newBooking
    },
    getBookingDetils: (bookingId: number) => {
        const bookingInfo = prisma.booking.findUnique({
            where: {
                id: bookingId
            },
            include: {
                payment: true,
                service: true,
                timeSlot: true,
                user: true
            }
        });
        return bookingInfo
    }
}