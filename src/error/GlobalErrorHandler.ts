
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import ApiError from './ApiError';
export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
export const globalErrorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = 'Something went wrong !';
  let errorMessages = ""

  if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
  }

  console.log(error)

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: process.env.NODE_ENV !== 'production' ? error?.stack : undefined,
  });
};

export default globalErrorHandler;