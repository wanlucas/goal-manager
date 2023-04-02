import CreateUser from '../../domain/useCases/user/CreateUser';
import GetUsers from '../../domain/useCases/user/GetUsers';
import UserRepositoryInMemory from '../../infra/repositories/memory/UserRepository';
import UserController from '../controllers/UserController';
import UserRouter from '../routers/UserRouter';

export class UserRouterFactory {
  static make() {
    const userRepository = new UserRepositoryInMemory();
    const createUser = new CreateUser(userRepository);
    const getUsers = new GetUsers(userRepository);
    const userController = new UserController(getUsers, createUser);
    const userRouter = new UserRouter(userController);

    return userRouter.get();
  }
}