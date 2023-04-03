import Goal from '../../entities/Goal';
import GoalRepository from '../../repositories/GoalRepository';
import { v4 as uuid } from 'uuid';
import BranchRepository from '../../repositories/BranchRepository';
import { NotFindingError } from '../../errors/relationshipError';

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
  private branchRepository: BranchRepository;
  
  constructor(goalRepository: GoalRepository, branchRepository: BranchRepository) {
    this.goalRepository = goalRepository;
    this.branchRepository = branchRepository;
  }

  async execute(payload: CreateGoalDTO): Promise<Goal> {
    const id = uuid();
    const goal = new Goal({ ...payload, id });

    const foundBranch = await this.branchRepository.findById(goal.branchId);

    if (!foundBranch) {
      throw new NotFindingError('Branch not found');
    }

    await this.goalRepository.save(goal);

    return goal;
  }
}