import httpStatus from "http-status";
import { catchAsync } from "../utils/catchAsync";
import { sendResponse } from "../utils/sendResponse";
import { Request, Response } from "express";
import timeSlotsServices from "../services/timeSlots.service"
import { generateTimeSlots } from "../utils/generateTimeSlots";
const TimeSlotsController = {
    getTimeSlots: catchAsync(async (req: Request, res: Response) => {
        const timeSlots = timeSlotsServices.getTimeSlots();
        sendResponse(res, httpStatus.OK, timeSlots, "SuccessFully retrived timeslots data")
    }),
    updateTimeSlots: catchAsync(async (req: Request, res: Response) => {
        const timeSlots = timeSlotsServices.updateTimeSlots(Number(req.params.id));
        sendResponse(res, httpStatus.OK, timeSlots, "SuccessFully updated timeslot data");
    }),

    createTimeSlots: catchAsync(async (req: Request, res: Response) => {
        const timeslots =await generateTimeSlots(new Date());
        sendResponse(res, httpStatus.OK, timeslots, "successfully created timeslots")
    })
}
export default TimeSlotsController;
