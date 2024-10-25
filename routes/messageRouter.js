import { Router } from "express";
import messageController from "../controllers/messageController.js";
import { isAuth } from "../middleware/authMiddleware.js"; // checks if user is logged in

const messageRouter = Router();

messageRouter.get("/", isAuth, messageController.messagesGet);
messageRouter.get("/new", isAuth, messageController.newMessageGet);
messageRouter.post("/new", isAuth, messageController.newMessagePost);

export default messageRouter;