import Goal from '../../entities/Goal';
import GoalRepository from '../../repositories/GoalRepository';
import { v4 as uuid } from 'uuid';

export interface CreateGoalDTO {
    description: string;
    branchId: string;
    finalDate: string;
    difficulty: number;
    target?: number;
    isCompleted?: boolean;
}

export default class CreateGoal {
  private goalRepository: GoalRepository;
  
  constructor(goalRepository: GoalRepository) {
    this.goalRepository = goalRepository;
  }

  async execute(payload: CreateGoalDTO): Promise<Goal> {
    const id = uuid();
    const goal = new Goal({ ...payload, id });

    await this.goalRepository.save(goal);

    return goal;
  }
}