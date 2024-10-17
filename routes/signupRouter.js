import { Router } from "express";
import signupController from "../controllers/signupController.js";

const signupRouter = Router();

signupRouter.get("/", signupController.signupGet);

export default signupRouter;