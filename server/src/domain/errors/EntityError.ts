import CoreError from './CoreError';

export default class EntityError extends CoreError {
  constructor(message: string, status: number) {
    super(message, status, 'Entity');
  }
}

export class InvalidValuesError extends EntityError {
  constructor(message: string) {
    super(message, 422);
  }
} 

export class MissingValuesError extends EntityError {
  constructor(message: string) {
    super(message, 400);
  }
}
