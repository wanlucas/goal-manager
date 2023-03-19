import GoalRepository from '../../repositories/GoalRepository';

export default class GetGoals {
  private goalRepository: GoalRepository;
  
  constructor(goalRepository: GoalRepository) { 
    this.goalRepository = goalRepository;
  }

  execute() {
    return this.goalRepository.findAll();
  }
}