import { NextFunction, Request, Response, response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { loginUser, registerUser } from "../services/auth.service";
import { sendResponse } from "../utils/sendResponse";
import ApiError from "../error/ApiError";
import httpStatus from "http-status";

const authController = {
    register: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const userData = req.body;
        if (!userData) {
            throw new ApiError(httpStatus.NOT_FOUND, "no data found to create user")
        }
        const data = await registerUser(userData);
        sendResponse(res, 200, data, "successfully created user")
    }),
    login: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const userData = req.body;
        if (!userData) {
            throw new ApiError(httpStatus.NOT_FOUND, "no data found to login user")
        }
        const data = await loginUser(userData);
        sendResponse(res, 200, data, "successfully logged in")

    })
}

export default authController