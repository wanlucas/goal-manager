import Trajectory, { ITrajectory } from '../../../src/domain/entities/Trajectory';

describe('Trajectory', () => {
  const requiredFields = {
    goalId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae02',
    id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
    score: 200,
  };

  test('should create a valid trajectory', () => {
    const params = requiredFields as ITrajectory;
    const trajectory = new Trajectory(params);

    expect(trajectory.id).toBe(requiredFields.id);
    expect(trajectory.score).toBe(requiredFields.score);
  });

  test('should throw an error if id is not provided', () => {
    const params = { ...requiredFields, id: null } as unknown as ITrajectory;

    expect(() => new Trajectory(params))
      .toThrowError('Trajectory must have an id');
  });

  test('should throw an error if id is not a string', () => {
    const params = { ...requiredFields, id: 123 } as unknown as ITrajectory;

    expect(() => new Trajectory(params))
      .toThrowError('Trajectory id must be a string');
  });

  test('should throw an error if score is not provided', () => {
    const params = { ...requiredFields, score: null } as unknown as ITrajectory;

    expect(() => new Trajectory(params))
      .toThrowError('Trajectory must have a score');
  });

  test('should throw an error if score is not a number', () => {
    const params = { ...requiredFields, score: '123' } as unknown as ITrajectory;

    expect(() => new Trajectory(params))
      .toThrowError('Trajectory score must be a number');
  });

  test('should throw an error if score is not a positive number', () => {
    const params = { ...requiredFields, score: -123 } as unknown as ITrajectory;

    expect(() => new Trajectory(params))
      .toThrowError('Trajectory score must be greater than 0');
  });
});