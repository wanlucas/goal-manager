import { NextFunction, Request, Response } from 'express';
import statusMap from '../utils/statusMap';
import TokenManager from '../security/token/TokenManager';

const tokenManager = new TokenManager();

export default class TokenValidator {
  static validate(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;
    
    if (!authorization) {
      return response.status(statusMap.UNAUTHORIZED).json({ message: 'Token not provided' });
    }
    
    const { id } = tokenManager.verifyToken(authorization);
    
    (request as (Request & { userId: string })).userId = id;
    
    return next();

  }
}