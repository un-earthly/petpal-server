import { NextFunction, Request, Response } from "express";
import { IUserRolesEnum } from "../interfaces/user.interface";
import { sendResponse } from "../utils/sendResponse";

export function customerRoute(req: Request, res: Response, next: NextFunction) {
    if (req.user && req.user.role === IUserRolesEnum.User) {
        next();
    } else {
        sendResponse(res, 403, null, 'Forbidden: Customer access required');
    }
}

export function adminRoute(req: Request, res: Response, next: NextFunction) {
    if (req.user && req.user.role === IUserRolesEnum.Admin) {
        next();
    } else {
        sendResponse(res, 403, null, 'Forbidden: Admin access required');
    }
}


export function superAdminRoute(req: Request, res: Response, next: NextFunction) {
    if (req.user && req.user.role === IUserRolesEnum["Super Admin"]) {
        next();
    } else {
        sendResponse(res, 403, null, 'Forbidden: Super Admin access required');
    }
}
