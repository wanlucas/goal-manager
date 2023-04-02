import { InvalidValuesError, MissingValuesError } from '../errors/EntityError';

export interface IGoal {
  description: string;
  id: string;
  branchId: string;
  finalDate: string;
  difficulty: number;
  target?: number;
  isCompleted?: boolean;
}

export default class Goal {
  public readonly description: string;
  public readonly id: string;
  public readonly target?: number;
  public readonly branchId: string;
  public readonly finalDate: string;
  public readonly difficulty: number;
  public isCompleted: boolean;

  constructor ({ description, id, target, branchId, finalDate, difficulty, isCompleted }: IGoal) {
    if (!description) {
      throw new MissingValuesError('Goal must have a description');
    }

    if (typeof description !== 'string') {
      throw new InvalidValuesError('Goal description must be a string');
    }

    if (!id) {
      throw new InvalidValuesError('Goal must have an id');
    }

    if (typeof id !== 'string') {
      throw new InvalidValuesError('Goal id must be a string');
    }

    if (target) {
      if (typeof target !== 'number') {
        throw new InvalidValuesError('Goal target must be a number');
      }

      if (target < 0) {
        throw new InvalidValuesError('Goal target must be greater than 0');
      }
    }

    if (!branchId) {
      throw new MissingValuesError('Goal must have a branch id');
    }

    if (typeof branchId !== 'string') {
      throw new InvalidValuesError('Goal branch id must be a string');
    }

    if (!finalDate) {
      throw new MissingValuesError('Goal must have a final date');
    }

    if (typeof finalDate !== 'string') {
      throw new InvalidValuesError('Goal final date must be a string');
    }

    if (new Date(finalDate).getTime() < new Date().getTime()) {
      throw new InvalidValuesError('Goal final date must be in the future');
    }

    if (!difficulty) {
      throw new MissingValuesError('Goal must have a difficulty');
    }

    if (typeof difficulty !== 'number') {
      throw new InvalidValuesError('Goal difficulty must be a number');
    }

    if (difficulty < 1 || difficulty > 10) {
      throw new InvalidValuesError('Goal difficulty must be between 1 and 10');
    }

    if (isCompleted && typeof isCompleted !== 'boolean') {
      throw new InvalidValuesError('Goal isCompleted must be a boolean');
    }

    this.description = description;
    this.id = id;
    this.branchId = branchId;
    this.finalDate = finalDate;
    this.difficulty = difficulty;
    this.isCompleted = isCompleted || false;

    if (target) {
      this.target = target;
    }
  }

  public conclude () {
    this.isCompleted = true;
  }
}