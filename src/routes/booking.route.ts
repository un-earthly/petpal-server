import express from "express";
import { verifyToken } from "../middlewares/token";
import { adminRoute } from "../middlewares/privateRoutes";
import { BookingController } from "../controller/booking.controller";
const bookingsRoutes = express.Router();

bookingsRoutes.get('/', verifyToken, BookingController.getUserBookings);
bookingsRoutes.get('/:bookingId', verifyToken, BookingController.getBookingDetails);
bookingsRoutes.put('/:bookingId/cancel', verifyToken, BookingController.cancelBooking);
bookingsRoutes.put('/:bookingId/status/update', verifyToken, adminRoute, BookingController.updateBookingStatus);


export default bookingsRoutes;