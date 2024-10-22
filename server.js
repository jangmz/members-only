import {fileURLToPath} from "url";
import path from "path";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
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

// body-parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session config
app.use(session({
    secret: "clubhouse",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.session());
//app.use(express.urlencoded({extended: false}));

// routes
app.use("/", homeRouter);
app.use("/log-in", loginRouter);
app.use("/sign-up", signupRouter);

// app running
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));