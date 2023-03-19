import Goal from '../entities/Goal';

interface GoalRepository {
  save(goal: Goal): Promise<string>,
  findAll(): Promise<Goal[]>,
  findById(id: string): Promise<Goal | undefined>,
}

export default GoalRepository;