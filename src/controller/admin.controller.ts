import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { sendResponse } from "../utils/sendResponse";
import httpStatus from "http-status";
import { AdminService } from "../services/admin.service";

export const AdminController = {
    getAllArticles: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const articles = AdminService.getAllArticles();
        sendResponse(res, httpStatus.OK, articles, "retrieved articles successfully");
    }),
    addArticle: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const articleData = req.body;
        const newArticle = AdminService.addArticle(articleData);
        sendResponse(res, httpStatus.CREATED, newArticle, "article added successfully");
    }),
    getArticleDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const articleId = req.params.articleId;
        const article = AdminService.getArticleDetails(Number(articleId));
        sendResponse(res, httpStatus.OK, article, "retrieved article details successfully");
    }),

    editArticleDetails: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const articleId = req.params.articleId;
        const updateData = req.body;
        const updatedData = AdminService.editArticleDetails(Number(articleId), updateData);
        sendResponse(res, httpStatus.OK, updatedData, "article details updated successfully");
    }),
}