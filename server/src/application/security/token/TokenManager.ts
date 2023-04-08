export interface TokenPayload {
  id: string;
  nickname?: string
}

interface TokenManager {
  generateToken(payload: TokenPayload, expiresIn?: string): string;
  verifyToken(token: string): TokenPayload;
}

export default TokenManager;