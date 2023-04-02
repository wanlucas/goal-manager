import { Request, Response, NextFunction } from 'express';
import HttpError from './HttpError';
import statusMap from './statusMap';
import EntityError from '../../domain/errors/EntityError';

export default (
  error: Error | HttpError | EntityError,
  _request: Request,
  response: Response,
  _next: NextFunction
) => {
  if (error instanceof HttpError || error instanceof EntityError) {
    return response.status(error.status).json({ message: error.message });
  }

  return response.status(statusMap.INTERNAL_ERROR).json({ message: error.message });
};