import { NextFunction, Request, Response } from "express";
import { ITokenPayload } from "../interfaces/token.interface";
import jwt from 'jsonwebtoken';
import { sendResponse } from "../utils/sendResponse";

const secretKey = 'YourSecretKey';



function generateToken(data: ITokenPayload) {
    return jwt.sign(data, secretKey, { expiresIn: '1h' });
}

function verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization as string;

    if (!token) {
        sendResponse(res, 401, null, 'Unauthorized: Token is missing');
        return;
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            sendResponse(res, 401, null, 'Unauthorized: Token is invalid');
            return;
        }
        req.user = decoded as ITokenPayload;
        next();
    });


}

module.exports = {
    generateToken,
    verifyToken,
};
