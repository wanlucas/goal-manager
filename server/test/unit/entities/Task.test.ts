import Task, { ITask } from '../../../src/domain/entities/Task';

describe('Task', () => {
  const requiredFields = {
    id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
    goalId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae02',
    title: '30 minutes of in kovaak',
    difficulty: 4,
    days: [1, 2, 3],
  };

  test('should create a valid task', () => {
    const task = new Task(requiredFields);

    expect(task.id).toBe(requiredFields.id);
    expect(task.title).toBe(requiredFields.title);
    expect(task.difficulty).toBe(requiredFields.difficulty);
    expect(task.goalId).toBe(requiredFields.goalId);
    expect(task.days).toEqual(requiredFields.days);
    expect(task.getXp()).not.toBeUndefined();
    expect(typeof task.getXp()).toBe('number');
  });

  test('should throw an error if id is not provided', () => {
    const params = { ...requiredFields, id: null } as unknown as ITask;

    expect(() => new Task(params))
      .toThrowError('Task must have an id');
  });

  test('should throw an error if id is not a string', () => {
    const params = { ...requiredFields, id: 123 } as unknown as ITask;

    expect(() => new Task(params))
      .toThrowError('Task id must be a string');
  });

  test('should throw an error if title is not provided', () => {
    const params = { ...requiredFields, title: null } as unknown as ITask;

    expect(() => new Task(params))
      .toThrowError('Task must have a title');
  });

  test('should throw an error if title is not a string', () => {
    const params = { ...requiredFields, title: 123 } as unknown as ITask;

    expect(() => new Task(params))
      .toThrowError('Task title must be a string');
  });

  test('should throw an error if difficulty is not provided', () => {
    const params = { ...requiredFields, difficulty: null } as unknown as ITask;

    expect(() => new Task(params))
      .toThrowError('Task must have a difficulty');
  });

  test('should throw an error if difficulty is not a number', () => {
    const params = { ...requiredFields, difficulty: 'string' } as unknown as ITask;

    expect(() => new Task(params))
      .toThrowError('Task difficulty must be a number');
  });

  test('should throw an error if difficulty is not between 1 and 10', () => {
    const params = { ...requiredFields, difficulty: 11 } as unknown as ITask;
    expect(() => new Task(params))
      .toThrowError('Task difficulty must be between 1 and 10');

    params.difficulty = -1;

    expect(() => new Task(params))
      .toThrowError('Task difficulty must be between 1 and 10');
  });

  test('should throw an error if goalId is not provided', () => {
    const params = { ...requiredFields, goalId: null } as unknown as ITask;

    expect(() => new Task(params))
      .toThrowError('Task must have a goalId');
  });

  test('should throw an error if goalId is not a string', () => {
    const params = { ...requiredFields, goalId: 123 } as unknown as ITask;

    expect(() => new Task(params))
      .toThrowError('Task goalId must be a string');
  });

  test('should throw an error if days is not provided', () => {
    const params = { ...requiredFields, days: null } as unknown as ITask;

    expect(() => new Task(params))
      .toThrowError('Task must have days');
  });

  test('should throw an error if days is not an array', () => {
    const params = { ...requiredFields, days: 'string' } as unknown as ITask;

    expect(() => new Task(params))
      .toThrowError('Task days must be an array');
  });

  test('should throw an error if days is an empty array', () => {
    const params = { ...requiredFields, days: [] } as unknown as ITask;

    expect(() => new Task(params))
      .toThrowError('Task days must have at least one day');
  });

  test('should throw an error if days is not an array of numbers', () => {
    const params = { ...requiredFields, days: ['string'] } as unknown as ITask;

    expect(() => new Task(params))
      .toThrowError('Task days must be an array of numbers');
  });
});

