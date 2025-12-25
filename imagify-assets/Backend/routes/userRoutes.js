import { registeruser, loginuser } from '../controlers/userController.js';
import express from 'express';
const userRouter = express.Router();

userRouter.post('/register', registeruser);
userRouter.post('/login', loginuser);

export default userRouter;