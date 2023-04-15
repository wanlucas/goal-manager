import express from 'express';
import userController from '../factories/UserControllerFactory';

const router = express.Router();

router.get('/', userController.findAll);
router.get('/:userId', userController.findOne);

export default router;