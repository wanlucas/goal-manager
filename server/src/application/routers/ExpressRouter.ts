import express from 'express';

export default class ExpressRouter {
  protected router: express.Router;

  constructor() {
    this.router = express.Router();
  }
}