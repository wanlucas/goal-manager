import jwt from 'jsonwebtoken';
import TokenManager, { TokenPayload } from './TokenManager';
import { UnauthorizedError } from '../../utils/HttpError';

export default class JwtToken implements TokenManager {
  constructor(private secret: string) { }

  public generateToken(payload: TokenPayload, expiresIn = '7d') {
    return jwt.sign(payload, this.secret, { expiresIn });
  }

  public verifyToken(token: string) {
    try {
      return jwt.verify(token, this.secret) as TokenPayload;
    } catch (error) {
      throw new UnauthorizedError('Invalid token');
    }
  }
}