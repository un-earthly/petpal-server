import { Request, Response, NextFunction } from 'express';

export function globalErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error('Global Error Handler:', err);

  // Define a custom error response format
  const errorResponse = {
    success: false,
    message: err.message || 'Internal Server Error',
  };

  // Set the HTTP status code for the response
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json(errorResponse);
}
