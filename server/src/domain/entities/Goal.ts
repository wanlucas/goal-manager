export interface IGoal {
  description: string;
  id: string;
  target?: number;
  branchId: string;
  finalDate: string;
  difficulty: number;
  isCompleted: boolean;
}

export default class Goal {
  public readonly description: string;
  public readonly id: string;
  public readonly target?: number;
  public readonly branchId: string;
  public readonly finalDate?: string;
  public readonly difficulty: number;
  public isCompleted: boolean;

  constructor ({ description, id, target, branchId, finalDate, difficulty, isCompleted }: IGoal) {
    if (!description) {
      throw new Error('Goal must have a description');
    }

    if (typeof description !== 'string') {
      throw new Error('Goal description must be a string');
    }

    if (!id) {
      throw new Error('Goal must have an id');
    }

    if (typeof id !== 'string') {
      throw new Error('Goal id must be a string');
    }

    if (target) {
      if (typeof target !== 'number') {
        throw new Error('Goal target must be a number');
      }

      if (target < 0) {
        throw new Error('Goal target must be greater than 0');
      }
    }

    if (!branchId) {
      throw new Error('Goal must have a branch id');
    }

    if (typeof branchId !== 'string') {
      throw new Error('Goal branch id must be a string');
    }

    if (!finalDate) {
      throw new Error('Goal must have a final date');
    }

    if (typeof finalDate !== 'string') {
      throw new Error('Goal final date must be a string');
    }

    if (new Date(finalDate).getTime() < new Date().getTime()) {
      throw new Error('Goal final date must be in the future');
    }

    if (!difficulty) {
      throw new Error('Goal must have a difficulty');
    }

    if (typeof difficulty !== 'number') {
      throw new Error('Goal difficulty must be a number');
    }

    if (difficulty < 1 || difficulty > 10) {
      throw new Error('Goal difficulty must be between 1 and 10');
    }

    if (isCompleted && typeof isCompleted !== 'boolean') {
      throw new Error('Goal isCompleted must be a boolean');
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