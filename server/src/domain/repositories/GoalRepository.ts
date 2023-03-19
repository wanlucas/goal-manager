import Goal from '../entities/Goal';

interface GoalRepository {
  save(goal: Goal): Promise<string>,
  findAll(): Promise<Goal[]>,
}

export default GoalRepository;