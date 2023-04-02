import Goal from '../../../domain/entities/Goal';
import GoalRepository from '../../../domain/repositories/GoalRepository';

export default class GoalRepositoryInMemory implements GoalRepository {
  private goal: Goal[] = [];

  async save(Goal: Goal): Promise<string> {
    this.goal.push(Goal);
    return Goal.id;
  }

  async findById(id: string): Promise<Goal | undefined> {
    return this.goal.find((goal) => goal.id === id);
  }

  async findAll(): Promise<Goal[]> {
    return this.goal;
  }
}