import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";

export const AdminController = {
    getAdminDashboard: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    getAllUsers: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    getUserDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    editUserDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    getAllServices: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    addService: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    getServiceDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    editServiceDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    getAllBookings: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    getBookingDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    cancelBooking: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    updateBookingStatus: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    getAllArticles: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    addArticle: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    getArticleDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
    editArticleDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    }),
}