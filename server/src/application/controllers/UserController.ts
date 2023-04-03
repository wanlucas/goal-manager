import { NextFunction, Request, Response } from 'express';
import statusMap from '../utils/statusMap';
import UserServices from '../services/UserServices';

export default class UserController {
  constructor(
    private userServices: UserServices,
  ) {
    this.getAll = this.getAll.bind(this);
    this.findOne = this.findOne.bind(this);
    this.create = this.create.bind(this);
  }

  async getAll(_request: Request, response: Response, next: NextFunction) {
    try {
      const users = await this.userServices.getAll();
  
      return response.status(statusMap.OK).json(users);
    } catch(error) {
      next(error);
    }
  }

  async findOne(request: Request, response: Response, next: NextFunction) {
    try {
      const { userId } = request.params;
      const user = await this.userServices.findOne(userId);
  
      return response.status(statusMap.OK).json(user);
    } catch(error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { body } = request;
      const user = await this.userServices.create(body);
  
      return response.status(statusMap.CREATED).json(user);
    } catch(error) {
      next(error);
    }
  }
}