import { Request, Response, NextFunction } from 'express';
import HttpError from './HttpError';
import statusMap from './statusMap';
import CoreError from '../../domain/errors/CoreError';

export default (
  error: Error | HttpError | CoreError,
  _request: Request,
  response: Response,
  _next: NextFunction
) => {
  if (error instanceof HttpError || error instanceof CoreError) {
    return response.status(error.status).json({ message: error.message });
  }

  return response.status(statusMap.INTERNAL_ERROR).json({ message: error.message }); // to tests
};