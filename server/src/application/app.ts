import express from 'express';
import { UserRouterFactory } from './factories/UserRouterFactory';
import errorHandler from './utils/errorHandler';
import TokenValidatorFactory from './factories/TokenValidatorFactory';

const app = express();

const tokenValidator = TokenValidatorFactory.make();

const userRouter = UserRouterFactory.make();

app.use(express.json());

app.use('/users', tokenValidator, userRouter);

app.use(errorHandler);

export default app;
