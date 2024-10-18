import db from "../db/queries.js";
import { body, validationResult } from "express-validator";

// errors for validation
const emailError = "is not the correct format. Enter it like so: example@mail.com";
const alphaError = "must only contain letters.";
const passwordError = "Password is too short, minimum of 8 characters are required";

// validation requirements
const validateUser = [
    body("firstName").trim()
        .isAlpha().withMessage(`First name ${alphaError}`),
    body("lastName").trim()
        .isAlpha().withMessage(`Last name ${alphaError}`),
    body("email").isEmail().withMessage(`Email ${emailError}`),
    body("username").custom(async value => {
        const user = await db.findUserEmail(value);
        if (user) throw new Error("Username is already taken!");
    }),
    body("password1").isLength({ min: 8 }).withMessage(passwordError),
    body("password2").custom((value, { req }) => {
        return value === req.body.password2
    })
];

// GET /sign-up -> sign up form
function signupGet(req, res) {
    res.render("sign-up");
}

// POST /sign-up -> enter into the DB
function signupPost(req, res) {
    console.log("Insert into DB");
    res.redirect("/log-in");
}

export default {
    signupGet,
    signupPost,
};