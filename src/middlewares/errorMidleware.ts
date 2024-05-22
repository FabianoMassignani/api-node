import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions/root";

export const errorMidleware = (
  error: HttpException,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
  });
};
