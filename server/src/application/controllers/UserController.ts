import { NextFunction, Request, Response } from 'express';
import CreateUser from '../../domain/useCases/user/CreateUser';
import statusMap from '../utils/statusMap';

export default class UserController {
  constructor(
    private createUser: CreateUser,
  ) {
    this.create = this.create.bind(this);
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