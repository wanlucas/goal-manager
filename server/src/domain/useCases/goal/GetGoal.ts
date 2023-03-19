import GoalRepository from '../../repositories/GoalRepository';

export default class GetGoal {
  private goalRepository: GoalRepository;

  constructor(goalRepository: GoalRepository) {
    this.goalRepository = goalRepository;
  }

  execute(id: string) {
    return this.goalRepository.findById(id);
  }
}