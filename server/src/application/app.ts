import express from 'express';
import { UserRouterFactory } from './factories/UserRouterFactory';
import errorHandler from './utils/errorHandler';

const app = express();

app.use(express.json());

app.use('/user', UserRouterFactory.make());

app.use(errorHandler);

export default app;

