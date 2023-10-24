import { PrismaClient } from "@prisma/client";
import { ITokenPayload } from "../interfaces/token.interface";
import ApiError from "../error/ApiError";
import httpStatus from "http-status";

const prisma = new PrismaClient();


export const getAdminList = () => {
    const admins = prisma.user.findMany({
        where: { role: "ADMIN" }
    })

    return admins;
}

export const makeUserAdmin = (userData: ITokenPayload) => {
    if (userData.role !== "USER") {
        throw new ApiError(httpStatus.FORBIDDEN, "User Must be a non ADMIN or Non SUPERADMIN user");
    }
    const updatedAdmin = prisma.user.update({
        where: {
            role: "USER",
            email: userData.email,
            id: userData.id
        },
        data: {
            role: "ADMIN",
        }
    })
    return updatedAdmin;
}