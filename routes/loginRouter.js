import { Router } from "express";
import loginController from "../controllers/loginController.js";

const loginRouter = Router();

loginRouter.get("/", loginController.loginGet);

export default loginRouter;