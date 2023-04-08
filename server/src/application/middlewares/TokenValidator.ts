import { NextFunction, Request, Response } from 'express';
import TokenManager from '../security/token/TokenManager';
import statusMap from '../utils/statusMap';

export default class TokenValidator {
  constructor(private tokenManager: TokenManager) {
    this.execute = this.execute.bind(this);
  }

  execute(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if (!authorization) {
      return response.status(statusMap.UNAUTHORIZED).json({ message: 'Token not provided' });
    }

    const { id } = this.tokenManager.verifyToken(authorization);

    (request as (Request & { userId: string })).userId = id;

    return next();
  }
}