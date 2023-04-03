import CreateUser from '../../domain/useCases/user/CreateUser';
import GetUser from '../../domain/useCases/user/GetUser';
import GetUsers from '../../domain/useCases/user/GetUsers';
import UserRepositoryInMemory from '../../infra/repositories/memory/UserRepository';
import UserController from '../controllers/UserController';
import UserRouter from '../routers/UserRouter';
import UserServices from '../services/UserServices';

export class UserRouterFactory {
  static make() {
    const userRepository = new UserRepositoryInMemory();
    const createUser = new CreateUser(userRepository);
    const getUsers = new GetUsers(userRepository);
    const getUser = new GetUser(userRepository);
    const userServices = new UserServices(getUsers, getUser, createUser);
    const userController = new UserController(userServices);
    const userRouter = new UserRouter(userController);

    return userRouter.get();
  }
}