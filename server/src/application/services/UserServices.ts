import CreateUser, { CreateUserDTO } from '../../domain/useCases/user/CreateUser';
import GetUser from '../../domain/useCases/user/GetUser';
import GetUsers from '../../domain/useCases/user/GetUsers';
import { NotFoundError } from '../utils/HttpError';

export default class UserServices {
  constructor(
    private getUsers: GetUsers,
    private getUser: GetUser,
    private createUser: CreateUser,
  ) { }
  
  async getAll() {
    const users = await this.getUsers.execute();

    if (!users) {
      throw new NotFoundError('Users not found');
    }

    return users;
  }

  async findOne(userId: string) {
    const user = await this.getUser.execute(userId);

    if (!user) {
      throw new NotFoundError('User not found');
    }

    return user;
  }

  async create(user: CreateUserDTO) {
    const createdUser = await this.createUser.execute(user);

    return createdUser;
  }
}