import Goal, { IGoal } from '../../../src/domain/entities/Goal';

const getDateInOneMonth = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date.toJSON();
};

const getDateOneMonthAgo = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return date.toJSON();
};

describe('Goal', () => {
  const RequiredFields = {
    description: 'Learn how to use Jest',
    id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
    branchId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
    finalDate: getDateInOneMonth(),
    difficulty: 5,
  };

  test('should create a valid goal', () => {
    const params = RequiredFields as IGoal;
    const goal = new Goal(params);

    expect(goal.id).toBe(RequiredFields.id);
    expect(goal.description).toBe(RequiredFields.description);
    expect(goal.branchId).toBe(RequiredFields.branchId);
    expect(goal.finalDate).toBe(RequiredFields.finalDate);
    expect(goal.difficulty).toBe(RequiredFields.difficulty);
  });

  test('should throw an error if description is not provided', () => {
    const params = { ...RequiredFields, description: null } as unknown as IGoal;

    expect(() => new Goal(params))
      .toThrowError('Goal must have a description');
  });

  test('should throw an error if description is not a string', () => {
    const params = { ...RequiredFields, description: 123 } as unknown as IGoal;

    expect(() => new Goal(params))
      .toThrowError('Goal description must be a string');
  });

  test('should throw an error if branch id is not provided', () => {
    const params = { ...RequiredFields, branchId: null } as unknown as IGoal;

    expect(() => new Goal(params))
      .toThrowError('Goal must have a branch id');
  });

  test('should throw an error if branch id is not a string', () => {
    const params = { ...RequiredFields, branchId: 123 } as unknown as IGoal;

    expect(() => new Goal(params))
      .toThrowError('Goal branch id must be a string');
  });

  test('should throw an error if final date is not provided', () => {
    const params = { ...RequiredFields, finalDate: null } as unknown as IGoal;

    expect(() => new Goal(params))
      .toThrowError('Goal must have a final date');
  });

  test('should throw an error if final date is not a string', () => {
    const params = { ...RequiredFields, finalDate: 123 } as unknown as IGoal;

    expect(() => new Goal(params))
      .toThrowError('Goal final date must be a string');
  });

  test('should throw an error if final date is in the past', () => {
    const params = { ...RequiredFields, finalDate: getDateOneMonthAgo() } as unknown as IGoal;

    expect(() => new Goal(params))
      .toThrowError('Goal final date must be in the future');
  });

  test('should throw an error if difficulty is not provided', () => {
    const params = { ...RequiredFields, difficulty: null } as unknown as IGoal;

    expect(() => new Goal(params))
      .toThrowError('Goal must have a difficulty');
  });

  test('should throw an error if difficulty is not a number', () => {
    const params = { ...RequiredFields, difficulty: '123' } as unknown as IGoal;

    expect(() => new Goal(params))
      .toThrowError('Goal difficulty must be a number');
  });

  test('should throw an error if difficulty is not between 1 and 10', () => {
    const params = { ...RequiredFields, difficulty: 11 } as unknown as IGoal;

    expect(() => new Goal(params))
      .toThrowError('Goal difficulty must be between 1 and 10');

    params.difficulty = -1;

    expect(() => new Goal(params))
      .toThrowError('Goal difficulty must be between 1 and 10');
  });
});