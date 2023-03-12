import Branch, { IBranch } from '../../../src/domain/entities/Branch';

describe('Branch', () => {
  const RequiredFields = {
    name: 'test',
    id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
    userId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae02',
  };

  test('should create a valid branch', () => {
    const xp = 150;
    const icon = 1;
    const params = { ...RequiredFields, xp, icon } as IBranch;
    const branch = new Branch(params);

    expect(branch.id).toBe(RequiredFields.id);
    expect(branch.name).toBe(RequiredFields.name);
    expect(branch.userId).toBe(RequiredFields.userId);
    expect(branch.xp).toBe(xp);
    expect(branch.icon).toBe(icon);
  });
  
  test('should create a new branch with xp equal to 0 if not passed', () => {
    const params = RequiredFields as IBranch;
    const branch = new Branch(params);

    expect(branch.xp).toBe(0);
  });

  test('should create a new branch with icon equal to 0 if not passed', () => {
    const params = RequiredFields as IBranch;
    const branch = new Branch(params);

    expect(branch.icon).toBe(0);
  });

  test('should throw an error if name is not provided', () => {
    const params = { ...RequiredFields, name: null } as unknown as IBranch;

    expect(() => new Branch(params))
      .toThrowError('Branch must have a name');
  });

  test('should throw an error if name is not a string', () => {
    const params = { ...RequiredFields, name: 123 } as unknown as IBranch;

    expect(() => new Branch(params))
      .toThrowError('Branch name must be a string');
  });

  test('should throw an error if xp is not a number', () => {
    const params = { ...RequiredFields, xp: 'string' } as unknown as IBranch;

    expect(() => new Branch(params))
      .toThrowError('Branch xp must be a number');
  });

  test('should throw an error if id is not a string', () => {
    const params = { ...RequiredFields, id: 123 } as unknown as IBranch;

    expect(() => new Branch(params))
      .toThrowError('Branch id must be a string');
  });

  test('should throw an error if icon is not a number', () => {
    const params = { ...RequiredFields, icon: 'string' } as unknown as IBranch;

    expect(() => new Branch(params))
      .toThrowError('Branch icon must be a number');
  });
});