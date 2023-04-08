import CoreError from './CoreError';

export default class AuthorizationError extends CoreError {
  constructor(message: string, status: number) {
    super(message, status, 'Authorization');
  }
}

export class InvalidFieldsError extends AuthorizationError {
  constructor(message: string) {
    super(message, 401);
  }
}