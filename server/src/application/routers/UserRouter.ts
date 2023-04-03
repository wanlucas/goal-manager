import UserController from '../controllers/UserController';
import ExpressRouter from './ExpressRouter';

export default class UserRouter extends ExpressRouter {
  constructor(
    private userController: UserController,
  ) { 
    super();
    this.createRoutes();
  }

  private createRoutes() {
    this.router.get('/', this.userController.getAll);
    this.router.get('/:userId', this.userController.findOne);
    this.router.post('/', this.userController.create);
  }

  public get() {
    return this.router;
  }
}