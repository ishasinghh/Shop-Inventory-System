import { Response } from "express";

interface SuccessResponse<T> {
  statusCode: number;
  success: boolean;
  data: T;
}

interface ErrorResponse {
  statusCode: number;
  success: boolean;
  error: string;
}

export const sendSuccessResponse = <T>(
  res: Response,
  statusCode: number,
  data: T
) => {
  const response: SuccessResponse<T> = {
    statusCode,
    success: true,
    data,
  };
  res.status(statusCode).json(response);
};

export const sendErrorResponse = (
  res: Response,
  statusCode: number,
  error: string
) => {
  const response: ErrorResponse = {
    statusCode,
    success: false,
    error,
  };
  res.status(statusCode).json(response);
};
