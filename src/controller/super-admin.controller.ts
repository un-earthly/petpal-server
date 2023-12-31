import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { sendResponse } from "../utils/sendResponse";
import httpStatus from "http-status";
import { getUserProfile, updateUserProfile } from "../services/user.service";
import { getAdminList, makeUserAdmin } from "../services/super-admin.service";

export const SuperAdminController = {
    getAllAdmins: catchAsync(async (req: Request, res: Response) => {
        const admins = getAdminList();
        sendResponse(res, httpStatus.OK, admins, "successfully fetched admins data")
    }),
    makeUserAdmin: catchAsync(async (req: Request, res: Response) => {
        const admin = makeUserAdmin(req.user)
        sendResponse(res, httpStatus.OK, admin, "successfully made user admin")
    }),
    getAdminDetails: catchAsync(async (req: Request, res: Response) => {
        const adminProfile = getUserProfile(req.user.id);
        sendResponse(res, httpStatus.OK, adminProfile, "admin profile")

    }),
    editAdminDetails: catchAsync(async (req: Request, res: Response) => {
        const updatedAdminDetails = updateUserProfile(req.user.id, req.body)
        sendResponse(res, httpStatus.OK, updatedAdminDetails, "admin profile")
    }),
}