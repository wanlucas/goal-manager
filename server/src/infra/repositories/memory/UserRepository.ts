import User from '../../../domain/entities/User';
import UserRepository from '../../../domain/repositories/UserRepository';

export default class UserRepositoryInMemory implements UserRepository {
  private users: User[] = [];

  async save(User: User): Promise<string> {
    this.users.push(User);
    return User.id;
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find((User) => User.id === id);
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findByNickname(nickname: string): Promise<User | undefined> {
    return this.users.find((user) => user.nickname === nickname);
  }
}