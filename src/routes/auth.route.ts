import express from "express";
const authRouter = express.Router();

authRouter.post('/register', AuthController.register);
authRouter.post('/login', AuthController.login);
authRouter.get('/logout', AuthController.logout);

export default authRouter;