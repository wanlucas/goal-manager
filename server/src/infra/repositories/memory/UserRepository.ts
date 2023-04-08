import User from '../../../domain/entities/User';
import UserRepository from '../../../domain/repositories/UserRepository';

export default class UserRepositoryInMemory implements UserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find((User) => User.id === id);
  }

  async findAll(values: any = {}): Promise<User[]> {
    return this.users.filter((user: any) => {
      return Object.keys(values).every((key: any) => (
        user[key] === values[key]
      ));
    });
  }

  async findOne(values: any = {}): Promise<User | undefined> {
    return this.users.find((user: any) => {
      return Object.keys(values).every((key: any) => (
        user[key] === values[key]
      ));
    });
  }
}