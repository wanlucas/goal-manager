import { NextFunction, Request, Response } from 'express';
import statusMap from '../utils/statusMap';
import UserServices from '../services/UserServices';

export default class UserController {
  constructor(
    private userServices: UserServices,
  ) {
    this.findAll = this.findAll.bind(this);
    this.findById = this.findById.bind(this);
    this.findOne = this.findOne.bind(this);
    this.create = this.create.bind(this);
    this.login = this.login.bind(this);
  }

  async findAll(request: Request, response: Response, next: NextFunction) {
    try {
      const users = await this.userServices.findAll(request.query);
  
      return response.status(statusMap.OK).json(users);
    } catch(error) {
      next(error);
    }
  }

  async findOne(request: Request, response: Response, next: NextFunction) {
    try {
      const user = await this.userServices.findOne(request.query);
  
      return response.status(statusMap.OK).json(user);
    } catch(error) {
      next(error);
    }
  }

  async findById(request: Request, response: Response, next: NextFunction) {
    try {
      const { userId } = request.params;
      const user = await this.userServices.findById(userId);
  
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

  async login(request: Request, response: Response, next: NextFunction) {
    try {
      const { nickname, password } = request.body;
      const user = await this.userServices.login({ nickname, password });
  
      return response.status(statusMap.OK).json(user);
    } catch(error) {
      next(error);
    }
  }
}