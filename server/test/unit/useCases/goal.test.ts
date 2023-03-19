import Goal from '../../../src/domain/entities/Goal';
import GoalRepository from '../../../src/domain/repositories/GoalRepository';
import CreateGoal, { CreateGoalDTO } from '../../../src/domain/useCases/goal/CreateGoal';
import { getDateInOneMonth } from '../../helpers/time';

describe('Goal use cases', () => {
  describe('CreateGoal', () => {
    const goalRepository = {
      save: (goal: Goal) => Promise.resolve(goal.id),
    } as unknown as GoalRepository;
    
    test('should create a goal', async () => {
      const payload: CreateGoalDTO = {
        description: 'Learn how to use Jest',
        branchId: '6ec0bd4f-f1c0-43da-975e-2a8ad9eb2853',
        finalDate: getDateInOneMonth(),
        difficulty: 2,
      };

      const creategoal = new CreateGoal(goalRepository);
      const result = await creategoal.execute(payload);
  
      expect(result).toBeInstanceOf(Goal);
    });
  });
});