export interface ITask {
  id: string,
  title: string,
  difficulty: number,
  goalId: string,
  days: number[],
}

export default class Task {
  public readonly id: string;
  public readonly goalId: string;
  public readonly title: string;
  public readonly difficulty: number;
  public readonly days: number[];
  
  constructor({ id, goalId, title, difficulty, days }: ITask) {
    if (!id) {
      throw new Error('Task must have an id');
    }

    if (typeof id !== 'string') {
      throw new Error('Task id must be a string');
    }

    if (!goalId) {
      throw new Error('Task must have a goalId');
    }

    if (typeof goalId !== 'string') {
      throw new Error('Task goalId must be a string');
    }

    if (!title) {
      throw new Error('Task must have a title');
    }

    if (typeof title !== 'string') {
      throw new Error('Task title must be a string');
    }

    if (!difficulty) {
      throw new Error('Task must have a difficulty');
    }

    if (typeof difficulty !== 'number') {
      throw new Error('Task difficulty must be a number');
    }

    if (difficulty < 1 || difficulty > 10) {
      throw new Error('Task difficulty must be between 1 and 10');
    }

    if (!days) {
      throw new Error('Task must have days');
    }

    if (!Array.isArray(days)) {
      throw new Error('Task days must be an array');
    }

    if (!days.length) {
      throw new Error('Task days must have at least one day');
    }

    if (days.some((day) => typeof day !== 'number')) {
      throw new Error('Task days must be an array of numbers');
    }

    this.id = id;
    this.title = title;
    this.difficulty = difficulty;
    this.goalId = goalId;
    this.days = days;
  }

  public getXp () {
    return this.difficulty * 10;
  }
}