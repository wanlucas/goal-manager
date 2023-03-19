import Goal from '../entities/Goal';

interface GoalRepository {
  save(goal: Goal): Promise<string>,
}

export default GoalRepository;