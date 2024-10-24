import { Router } from "express";

const logoutRouter = Router();

logoutRouter.get("/", (req, res) => {
    req.logout();
    res.redirect("/log-in");
});

export default logoutRouter;