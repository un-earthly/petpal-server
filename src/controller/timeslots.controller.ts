import httpStatus from "http-status";
import { catchAsync } from "../utils/catchAsync";
import { sendResponse } from "../utils/sendResponse";
import { Request, Response } from "express";
import timeSlotsServices from "../services/timeSlots.service"
const TimeSlotsController = {
    getTimeSlots: catchAsync(async (req: Request, res: Response) => {
        const timeSlots = timeSlotsServices.getTimeSlots();
        sendResponse(res, httpStatus.OK, timeSlots, "SuccessFully retrived timeslots data")
    }),
    createTimeSlots: catchAsync(async () => {
        
    }),
    updateTimeSlots: catchAsync(async () => {

    }),
    deleteTimeSlots: catchAsync(async () => {

    }),

}
export default TimeSlotsController;
