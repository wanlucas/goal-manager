import User, { IUser } from '../../../src/domain/entities/User';

describe('User', () => {
  const RequiredFields = {
    name: 'Wan Lucas',
    nickname: 'Wan',
    password: '123456',
    id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
  };

  test('should create a valid user', () => {
    const params = RequiredFields as IUser;
    const user = new User(params);

    expect(user.id).toBe(RequiredFields.id);
    expect(user.name).toBe(RequiredFields.name);
    expect(user.nickname).toBe(RequiredFields.nickname);
  });

  test('should throw an error if name is not provided', () => {
    const params = { ...RequiredFields, name: null } as unknown as IUser;

    expect(() => new User(params))
      .toThrowError('User must have a name');
  });

  test('should throw an error if name is not a string', () => {
    const params = { ...RequiredFields, name: 123 } as unknown as IUser;

    expect(() => new User(params))
      .toThrowError('User name must be a string');
  });
  
  test('should throw an error if nickname is not provided', () => {
    const params = { ...RequiredFields, nickname: null } as unknown as IUser;

    expect(() => new User(params))
      .toThrowError('User must have a nickname');
  });

  test('should throw an error if nickname is not a string', () => {
    const params = { ...RequiredFields, nickname: 123 } as unknown as IUser;

    expect(() => new User(params))
      .toThrowError('User nickname must be a string');
  });

  test('should throw an error if password is not provided', () => {
    const params = { ...RequiredFields, password: null } as unknown as IUser;

    expect(() => new User(params))
      .toThrowError('User must have a password');
  });

  test('should throw an error if password is not a string', () => {
    const params = { ...RequiredFields, password: 123 } as unknown as IUser;

    expect(() => new User(params))
      .toThrowError('User password must be a string');
  });

  test('should throw an error if password is less than 6 characters', () => {
    const params = { ...RequiredFields, password: '12345' } as unknown as IUser;

    expect(() => new User(params))
      .toThrowError('User password must be at least 8 characters long');
  });
});