import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";

export const BookingController = {
    getUserBookings: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    getBookingDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    cancelBooking: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    updateBookingStatus: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    })
}