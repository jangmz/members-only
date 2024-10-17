import pg from "pg";
import {fileURLToPath} from "url";
import path from "path";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import passport from "passport";
import bcrypt from "bcryptjs";
import homeRouter from "./routes/homeRoute.js";
import loginRouter from "./routes/loginRouter.js";
import signupRouter from "./routes/signupRouter.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// setting public files and EJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// routes
app.use("/", homeRouter);
app.use("/log-in", loginRouter);
app.use("/sign-up", signupRouter);

// app running
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));