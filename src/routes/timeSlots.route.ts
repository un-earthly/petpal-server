import express from "express";
import { verifyToken } from "../middlewares/token";
import TimeSlotsController from "../controller/timeslots.controller";
import { adminRoute } from "../middlewares/privateRoutes";
const timeSlotRouter = express.Router();

timeSlotRouter.get('/', verifyToken, TimeSlotsController.getTimeSlots);
timeSlotRouter.post('/', adminRoute, verifyToken, TimeSlotsController.createTimeSlots);
timeSlotRouter.put('/', adminRoute, verifyToken, TimeSlotsController.updateTimeSlots);
timeSlotRouter.delete('/', adminRoute, verifyToken, TimeSlotsController.deleteTimeSlots);

export default timeSlotRouter;