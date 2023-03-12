export interface IUser {
  name: string;
  nickname: string;
  id: string;
  password: string;
}

export default class User {
  public readonly name: string;
  public readonly nickname: string;
  public readonly id: string;
  public readonly password: string;

  constructor({ name, nickname, id, password }: IUser) {
    if (!name) {
      throw new Error('User must have a name');
    }

    if (typeof name !== 'string') {
      throw new Error('User name must be a string');
    }

    if (!nickname) {
      throw new Error('User must have a nickname');
    }

    if (typeof nickname !== 'string') {
      throw new Error('User nickname must be a string');
    }

    if (typeof id !== 'string') {
      throw new Error('User id must be a string');
    }

    if (!password) {
      throw new Error('User must have a password');
    }

    if (password.length < 6) {
      throw new Error('User password must be at least 8 characters long');
    }

    if (typeof password !== 'string') {
      throw new Error('User password must be a string');
    }

    this.name = name;
    this.nickname = nickname;
    this.id = id;
    this.password = password;
  }
}