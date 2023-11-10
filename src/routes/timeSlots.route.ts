import express from "express";
import { verifyToken } from "../middlewares/token";
import TimeSlotsController from "../controller/timeslots.controller";
import { adminRoute } from "../middlewares/privateRoutes";
const timeSlotRouter = express.Router();

timeSlotRouter.get('/', verifyToken, TimeSlotsController.getTimeSlots);
timeSlotRouter.post("/", TimeSlotsController.createTimeSlots)
timeSlotRouter.put('/:id', adminRoute, verifyToken, TimeSlotsController.updateTimeSlots);
export default timeSlotRouter;