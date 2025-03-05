import { Request, Response, NextFunction } from 'express';


export class CustomError extends Error {
    statusCode: number;
  
    constructor(statusCode: number, message: string) {
      super(message);
      this.statusCode = statusCode;
      this.name = 'CustomError';
      Object.setPrototypeOf(this, CustomError.prototype);
    }
  }
  


export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  console.error(err);

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      statusCode: err.statusCode,
    });
  }

  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    statusCode: 500,
  });
};
