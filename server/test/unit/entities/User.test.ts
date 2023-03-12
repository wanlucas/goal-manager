import User, { IUser } from '../../../src/domain/entities/User';

describe('User', () => {
  const requiredFields = {
    name: 'Wan Lucas',
    nickname: 'Wan',
    password: '123456',
    id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
  };

  test('should create a valid user', () => {
    const params = requiredFields as IUser;
    const user = new User(params);

    expect(user.id).toBe(requiredFields.id);
    expect(user.name).toBe(requiredFields.name);
    expect(user.nickname).toBe(requiredFields.nickname);
  });

  test('should throw an error if name is not provided', () => {
    const params = { ...requiredFields, name: null } as unknown as IUser;

    expect(() => new User(params))
      .toThrowError('User must have a name');
  });

  test('should throw an error if name is not a string', () => {
    const params = { ...requiredFields, name: 123 } as unknown as IUser;

    expect(() => new User(params))
      .toThrowError('User name must be a string');
  });
  
  test('should throw an error if nickname is not provided', () => {
    const params = { ...requiredFields, nickname: null } as unknown as IUser;

    expect(() => new User(params))
      .toThrowError('User must have a nickname');
  });

  test('should throw an error if nickname is not a string', () => {
    const params = { ...requiredFields, nickname: 123 } as unknown as IUser;

    expect(() => new User(params))
      .toThrowError('User nickname must be a string');
  });

  test('should throw an error if password is not provided', () => {
    const params = { ...requiredFields, password: null } as unknown as IUser;

    expect(() => new User(params))
      .toThrowError('User must have a password');
  });

  test('should throw an error if password is not a string', () => {
    const params = { ...requiredFields, password: 123 } as unknown as IUser;

    expect(() => new User(params))
      .toThrowError('User password must be a string');
  });

  test('should throw an error if password is less than 6 characters', () => {
    const params = { ...requiredFields, password: '12345' } as unknown as IUser;

    expect(() => new User(params))
      .toThrowError('User password must be at least 8 characters long');
  });
});