export interface IConquest {
  id: string;
  goalId: string;
}

export default class Conquest {
  public readonly id: string;
  public readonly goalId: string;
  public readonly date: string;

  constructor({ id, goalId }: IConquest) {
    if (!goalId) {
      throw new Error('Conquest must have a goal');
    }

    if (typeof goalId !== 'string') {
      throw new Error('Conquest goal must be a string');
    }

    if (!id) {
      throw new Error('Conquest must have an id');
    }

    if (typeof id !== 'string') {
      throw new Error('Conquest id must be a string');
    }

    this.id = id;
    this.goalId = goalId;
    this.date = new Date().toJSON();
  }
}