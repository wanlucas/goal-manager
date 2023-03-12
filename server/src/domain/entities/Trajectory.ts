export interface ITrajectory {
  goalId: string;
  id: string;
  date: string;
  score: number;
}

export default class Trajectory {
  public goalId: string;
  public id: string;
  public date: string;
  public score: number;

  constructor({ goalId, id, score }: ITrajectory) {
    if (!goalId) {
      throw new Error('Trajectory must have a goalId');
    }

    if (typeof goalId !== 'string') {
      throw new Error('Trajectory goalId must be a string');
    }

    if (!id) {
      throw new Error('Trajectory must have an id');
    }

    if (typeof id !== 'string') {
      throw new Error('Trajectory id must be a string');
    }

    if (!score) {
      throw new Error('Trajectory must have a score');
    }

    if (typeof score !== 'number') {
      throw new Error('Trajectory score must be a number');
    }

    if (score < 0) {
      throw new Error('Trajectory score must be greater than 0');
    }

    this.goalId = goalId;
    this.id = id;
    this.score = score;
    this.date = new Date().toJSON();
  }
}