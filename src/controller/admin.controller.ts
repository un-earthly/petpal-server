import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { sendResponse } from "../utils/sendResponse";
import httpStatus from "http-status";
import { AdminService } from "../services/admin.service";

export const AdminController = {
    getAllUsers: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const users = AdminService.getAllUsers();
        sendResponse(res, httpStatus.OK, users, "retrived users successfully")
    }),
    getUserDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const userId = Number(req.params.userId);
        const user = AdminService.getUserDetails(userId);
        sendResponse(res, httpStatus.OK, user, "retrieved user details successfully");
    }),
    editUserDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const userId = req.params.userId;
        const updatedData = req.body;
        const editedUser = AdminService.editUserDetails(userId, updatedData);
        sendResponse(res, httpStatus.OK, editedUser, "user details updated successfully");
    }),
    getAllServices: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const services = AdminService.getAllServices();
        sendResponse(res, httpStatus.OK, services, "retrieved services successfully");
    }),
    addService: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const serviceData = req.body;
        const newService = AdminService.addService(serviceData);
        sendResponse(res, httpStatus.CREATED, newService, "service added successfully");
    }),

    getServiceDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const serviceId = req.params.serviceId;
        const service = AdminService.getServiceDetails(serviceId);
        sendResponse(res, httpStatus.OK, service, "retrieved service details successfully");
    }),

    editServiceDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const serviceId = req.params.serviceId;
        const updatedData = req.body;
        const updatedService = AdminService.editServiceDetails(Number(serviceId), updatedData);
        sendResponse(res, httpStatus.OK, updatedService, "service details updated successfully");
    }),
    getAllBookings: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const bookings = AdminService.getAllBookings();
        sendResponse(res, httpStatus.OK, bookings, "retrieved bookings successfully");
    }),
    getBookingDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const bookingId = req.params.bookingId;
        const booking = AdminService.getBookingDetails(bookingId);
        sendResponse(res, httpStatus.OK, booking, "retrieved booking details successfully");
    }),
    cancelBooking: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const bookingId = req.params.bookingId;
        const canceledBooking = AdminService.cancelBooking(bookingId);
        sendResponse(res, httpStatus.OK, canceledBooking, "booking canceled successfully");
    }),
    updateBookingStatus: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const bookingId = req.params.bookingId;
        const newStatus = req.body.status;
        const updatedBook = AdminService.updateBookingStatus(bookingId, newStatus);
        sendResponse(res, httpStatus.OK, updatedBook, "booking status updated successfully");
    }),
    getAllArticles: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const articles = AdminService. getAllArticles();
        sendResponse(res, httpStatus.OK, articles, "retrieved articles successfully");
    }),
    addArticle: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const articleData = req.body;
        const newArticle = AdminService.addArticle(articleData);
        sendResponse(res, httpStatus.CREATED, newArticle, "article added successfully");
    }),
    getArticleDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const articleId = req.params.articleId;
        const article = AdminService.getArticleDetails(articleId);
        sendResponse(res, httpStatus.OK, article, "retrieved article details successfully");
    }),

    editArticleDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const articleId = req.params.articleId;
        const updateData = req.body;
        const updatedData = AdminService.editArticleDetails(articleId, updateData);
        sendResponse(res, httpStatus.OK, updatedData, "article details updated successfully");
    }),
}