import express from 'express';
import userController from '../factories/UserControllerFactory';

const router = express.Router();

router.post('/login', userController.login);
router.post('/users', userController.create);

export default router;