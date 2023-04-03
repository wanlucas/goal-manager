import CoreError from './CoreError';

export default class RelationshipError extends CoreError {
  constructor(message: string, status: number) {
    super(message, status, 'Relationship');
  }
}

export class AlreadyExistsError extends RelationshipError {
  constructor(message: string) {
    super(message, 409);
  }
}

export class NotFindingError extends RelationshipError {
  constructor(message: string) {
    super(message, 404);
  }
}