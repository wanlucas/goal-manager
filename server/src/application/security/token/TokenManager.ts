import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../../utils/HttpError';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

export interface TokenPayload {
  id: string;
  nickname?: string
}

export default class TokenManager {
  public generateToken(payload: TokenPayload, expiresIn = '7d') {
    return jwt.sign(payload, secret, { expiresIn });
  }

  public verifyToken(token: string) {
    try {
      return jwt.verify(token, secret) as TokenPayload;
    } catch (error) {
      throw new UnauthorizedError('Invalid token');
    }
  }
}
