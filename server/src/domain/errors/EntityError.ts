export default class EntityError extends Error {
  public status: number;
  
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
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