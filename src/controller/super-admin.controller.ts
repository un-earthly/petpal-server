import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";

export const SuperAdminController = {
    getSuperAdminDashboard: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    getAllAdmins: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    addAdmin: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    getAdminDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    editAdminDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
}