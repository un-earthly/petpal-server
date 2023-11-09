import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { sendResponse } from "../utils/sendResponse";
import httpStatus from "http-status";
import ApiError from "../error/ApiError";
import { bookingServices } from "../services/booking.service";

export const BookingController = {
    getUserBookings: catchAsync(async (req: Request, res: Response) => {
        const bookings = bookingServices.getUserBookings(req.user.id)
        if (!bookings) {
            throw new ApiError(httpStatus.NOT_FOUND, "Bookings not found")
        }
        sendResponse(res, httpStatus.OK, bookings, "Successfully Retrieved User Bookings")
    }),
    getBookingDetails: catchAsync(async (req: Request, res: Response) => {

    }),
    addBooking: catchAsync(async (req: Request, res: Response) => {
        const newBooking = bookingServices.addBooking({ ...req.body, userId: req.user.id })
        sendResponse(res, httpStatus.OK, newBooking, "Successfully Booked Service")
    }),
    cancelBooking: catchAsync(async (req: Request, res: Response) => {

    }),
    updateBookingStatus: catchAsync(async (req: Request, res: Response) => {

    })
}