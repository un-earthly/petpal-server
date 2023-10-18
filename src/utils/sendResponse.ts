import { Response } from 'express';

export function sendResponse(res: Response, status: number, data: any, message?: string, token?: string) {
    const response = {
        success: true,
        message: message || 'Success',
        data,
        token
    };

    if (token) {
        response['token'] = token;
    }

    res.status(status).json(response);
}
