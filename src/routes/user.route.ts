import express from "express";
import { verifyToken } from "../middlewares/token";
const userRouter = express.Router();

userRouter.get('/user', verifyToken, UserController.getUserProfile);
userRouter.put('/user/update', verifyToken, UserController.updateUserProfile);
userRouter.put('/user/password/update', verifyToken, UserController.updateUserPassword);
userRouter.delete('/user/delete', verifyToken, UserController.deleteUserAccount);
userRouter.get('/user/bookings', verifyToken, UserController.getUserBookings);

export default userRouter;