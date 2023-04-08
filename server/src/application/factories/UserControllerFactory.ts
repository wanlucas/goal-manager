import CreateUser from '../../domain/useCases/user/CreateUser';
import GetUser from '../../domain/useCases/user/GetUser';
import FindUsers from '../../domain/useCases/user/FindUsers';
import UserRepositoryInMemory from '../../infra/repositories/memory/UserRepository';
import UserController from '../controllers/UserController';
import UserServices from '../services/UserServices';
import FindUser from '../../domain/useCases/user/FindUser';
import TokenManager from '../security/token/TokenManager';

export class UserControllerFactory {
  static make() {
    const userRepository = new UserRepositoryInMemory();
    const createUser = new CreateUser(userRepository);
    const findUsers = new FindUsers(userRepository);
    const findUser = new FindUser(userRepository);
    const getUser = new GetUser(userRepository);
    const tokenManager = new TokenManager();
    const userServices = new UserServices(findUsers, findUser, getUser, createUser, tokenManager);
    const userController = new UserController(userServices);

    return userController;
  }
}

export default UserControllerFactory.make();