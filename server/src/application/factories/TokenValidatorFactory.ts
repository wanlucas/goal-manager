import TokenValidator from '../middlewares/TokenValidator';
import JwtToken from '../security/token/JwtToken';

export default class TokenValidatorFactory {
  static make() {
    const tokenSecret = process.env.TOKEN_SECRET || 'secret';
    const tokenManager = new JwtToken(tokenSecret);
    const tokenValidator = new TokenValidator(tokenManager);

    return tokenValidator.execute;
  }
}