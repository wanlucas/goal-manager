import Goal from '../../../src/domain/entities/Goal';
import BranchRepository from '../../../src/domain/repositories/BranchRepository';
import GoalRepository from '../../../src/domain/repositories/GoalRepository';
import CreateGoal from '../../../src/domain/useCases/goal/CreateGoal';
import GetGoal from '../../../src/domain/useCases/goal/GetGoal';
import GetGoals from '../../../src/domain/useCases/goal/GetGoals';
import goalsMock, { validBody } from '../../mocks/goal';

describe('Goal use cases', () => {
  describe('CreateGoal', () => {
    test('should create a goal', async () => {
      const goalRepository = {
        save: (goal: Goal) => Promise.resolve(goal.id),
      } as unknown as GoalRepository;

      const branchRepository = {
        findById: () => Promise.resolve(goalsMock[0].branchId),
      } as unknown as BranchRepository;

      const creategoal = new CreateGoal(goalRepository, branchRepository);
      const result = await creategoal.execute(validBody);
  
      expect(result).toBeInstanceOf(Goal);
    });

    test('should fail if branch not found', async () => {
      const goalRepository = {
        save: (goal: Goal) => Promise.resolve(goal.id),
      } as unknown as GoalRepository;

      const branchRepository = {
        findById: () => Promise.resolve(undefined),
      } as unknown as BranchRepository;

      const createGoal = new CreateGoal(goalRepository, branchRepository);
      const result = createGoal.execute(validBody);

      expect(result).rejects.toThrow('Branch not found');
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

  describe('GetGoal', () => {
    const goalRepository = {
      findById: () => Promise.resolve(goalsMock[0]),
    } as unknown as GoalRepository;

    test('should get a goal', async () => {
      const getGoal = new GetGoal(goalRepository);
      const result = await getGoal.execute(goalsMock[0].id);

      expect(result).toEqual(goalsMock[0]);
    });
  });
});