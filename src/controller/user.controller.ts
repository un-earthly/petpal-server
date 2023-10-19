import { Request, Response } from 'express';
import { deleteUserAccount, getUserBookings, getUserProfile, updateUserPassword, updateUserProfile } from '../services/user.service';
import ApiError from '../error/ApiError';
import httpStatus from 'http-status';
import { sendResponse } from '../utils/sendResponse';
import { catchAsync } from '../utils/catchAsync';

const UserController = {
    getUserProfile: catchAsync(async (req: Request, res: Response) => {
        if (!req.user.id) {
            throw new ApiError(httpStatus.NOT_FOUND, `no token was found`)
        }
        const userProfile = getUserProfile(req.user.id);

        if (!userProfile) {
            throw new ApiError(httpStatus.NOT_FOUND, `no data found for ${req.user.id}`)
        }

        sendResponse(res, httpStatus.OK, userProfile, "succesfully fetched user data")
    }),

    updateUserProfile: catchAsync(async (req: Request, res: Response) => {
        const { body } = req;
        const updatedUser = await updateUserProfile(req.user.id, body);
        res.status(200).json({ success: true, data: updatedUser });
    }),

    updateUserPassword: catchAsync(async (req: Request, res: Response) => {
        const data = await updateUserPassword(req.user.id, req.body.password);
        sendResponse(res, httpStatus.OK, data)
    }),

    deleteUserAccount: catchAsync(async (req: Request, res: Response) => {
        const data = await deleteUserAccount(req.user.id);
        sendResponse(res, httpStatus.OK, data)
    }),

    getUserBookings: catchAsync(async (req: Request, res: Response) => {
        const data = await getUserBookings(req.user.id);
        sendResponse(res, httpStatus.OK, data);
    })
};

export default UserController;
