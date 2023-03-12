import Conquest, { IConquest } from '../../../src/domain/entities/Conquest';

describe('Conquest', () => {
  const requiredFields = {
    id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
    goalId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae02',
  };

  test('should create a valid conquest', () => {
    const params = requiredFields as IConquest;
    const conquest = new Conquest(params);

    expect(conquest.id).toBe(requiredFields.id);
    expect(conquest.goalId).toBe(requiredFields.goalId);
  });

  test('should throw an error if id is not provided', () => {
    const params = { ...requiredFields, id: null } as unknown as IConquest;

    expect(() => new Conquest(params))
      .toThrowError('Conquest must have an id');
  });

  test('should throw an error if id is not a string', () => {
    const params = { ...requiredFields, id: 123 } as unknown as IConquest;

    expect(() => new Conquest(params))
      .toThrowError('Conquest id must be a string');
  });

  test('should throw an error if goalId is not provided', () => {
    const params = { ...requiredFields, goalId: null } as unknown as IConquest;

    expect(() => new Conquest(params))
      .toThrowError('Conquest must have a goal');
  });

  test('should throw an error if goalId is not a string', () => {
    const params = { ...requiredFields, goalId: 123 } as unknown as IConquest;

    expect(() => new Conquest(params))
      .toThrowError('Conquest goal must be a string');
  });
});