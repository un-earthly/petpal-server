import httpStatus from "http-status";
import { catchAsync } from "../utils/catchAsync";
import { sendResponse } from "../utils/sendResponse";
import { Request, Response } from "express";
import timeSlotsServices from "../services/timeSlots.service"
import { generateTimeSlots } from "../utils/generateTimeSlots";
const TimeSlotsController = {
    getTimeSlots: catchAsync(async (req: Request, res: Response) => {
        const timeSlots =await timeSlotsServices.getTimeSlots();
        sendResponse(res, httpStatus.OK, timeSlots, "SuccessFully retrived timeslots data")
    }),
    updateTimeSlots: catchAsync(async (req: Request, res: Response) => {
        const timeSlots =await timeSlotsServices.updateTimeSlots(Number(req.params.id));
        sendResponse(res, httpStatus.OK, timeSlots, "SuccessFully updated timeslot data");
    }),

    createTimeSlots: catchAsync(async (req: Request, res: Response) => {
        const selectedDate = new Date(req.body.selectedDate);
        const timeslots = await generateTimeSlots(selectedDate);
        sendResponse(res, httpStatus.OK, timeslots, "Successfully created time slots");

    })
}
export default TimeSlotsController;
