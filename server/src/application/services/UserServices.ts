import CreateUser from '../../domain/useCases/user/CreateUser';
import GetUser from '../../domain/useCases/user/GetUser';
import FindUsers from '../../domain/useCases/user/FindUsers';
import { NotFoundError } from '../utils/HttpError';
import FindUser from '../../domain/useCases/user/FindUser';
import { CreateUserDTO, FindUserDTO, LoginDTO } from '../../domain/repositories/UserRepository';
import { UnauthorizedError } from '../utils/HttpError';
import TokenManager from '../security/token/TokenManager';

export default class UserServices {
  constructor(
    private findUsers: FindUsers,
    private findUser: FindUser,
    private getUser: GetUser,
    private createUser: CreateUser,
    private tokenManager: TokenManager,
  ) { }
  
  async findAll(values: FindUserDTO) {
    const users = await this.findUsers.execute(values);

    if (!users) {
      throw new NotFoundError('Users not found');
    }

    return users;
  }

  async findOne(values: FindUserDTO) {
    const user = await this.findUser.execute(values);

    if (!user) {
      throw new NotFoundError('User not found');
    }

    return user;
  }

  async findById(userId: string) {
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

  async login(credentials: LoginDTO) {
    const foundUser = await this.findUser.execute(credentials);

    if (!foundUser) {
      throw new UnauthorizedError('Nickname or password is incorrect');
    }

    return { token: this.tokenManager.generateToken({ id: foundUser.id }) };
  }
}