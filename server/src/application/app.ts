import express from 'express';
import errorHandler from './utils/errorHandler';
import TokenValidator from './middlewares/TokenValidator';
import userRouter from './routers/userRouter';
import publicRouter from './routers/publicRouter';

const app = express();

app.use(express.json());

app.use('/', publicRouter);
app.use('/users', TokenValidator.validate, userRouter);

app.use(errorHandler);

export default app;
