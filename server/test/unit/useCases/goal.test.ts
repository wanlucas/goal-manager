import Goal from '../../../src/domain/entities/Goal';
import GoalRepository from '../../../src/domain/repositories/GoalRepository';
import CreateGoal, { CreateGoalDTO } from '../../../src/domain/useCases/goal/CreateGoal';
import GetGoals from '../../../src/domain/useCases/goal/GetGoals';
import { getDateInOneMonth } from '../../helpers/time';
import goalsMock from '../../mocks/goal';

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

  describe('GetGoals', () => {
    const goalRepository = {
      findAll: () => Promise.resolve(goalsMock),
    } as unknown as GoalRepository;

    test('should get all goals', async () => {
      const getGoals = new GetGoals(goalRepository);
      const result = await getGoals.execute();

      expect(result).toEqual(goalsMock);
    });
  });
});