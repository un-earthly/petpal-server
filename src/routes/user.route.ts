import express from "express";
import { verifyToken } from "../middlewares/token";
import UserController from "../controller/user.controller";
const userRouter = express.Router();

userRouter.get('/', verifyToken, UserController.getUserProfile);
userRouter.put('/update', verifyToken, UserController.updateUserProfile);
userRouter.put('/password/update', verifyToken, UserController.updateUserPassword);
userRouter.delete('/delete', verifyToken, UserController.deleteUserAccount);
userRouter.get('/bookings', verifyToken, UserController.getUserBookings);

export default userRouter;