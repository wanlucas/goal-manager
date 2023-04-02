import { NextFunction, Request, Response } from 'express';
import CreateUser from '../../domain/useCases/user/CreateUser';
import statusMap from '../utils/statusMap';
import GetUsers from '../../domain/useCases/user/GetUsers';

export default class UserController {
  constructor(
    private getUsers: GetUsers,
    private createUser: CreateUser,
  ) {
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  async getAll(_request: Request, response: Response, next: NextFunction) {
    try {
      const users = await this.getUsers.execute();
  
      return response.status(statusMap.OK).json(users);
    } catch(error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { body } = request;
      const user = await this.createUser.execute(body);
  
      return response.status(statusMap.CREATED).json(user);
    } catch(error) {
      next(error);
    }
  }
}