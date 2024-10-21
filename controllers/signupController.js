import { matchedData, validationResult } from "express-validator";
import db from "../db/queries.js";
import bcrypt from "bcryptjs";

// GET /sign-up -> sign up form
function signupGet(req, res) {
    res.render("sign-up");
}

// POST /sign-up -> enter into the DB
async function signupPost (req, res) {
    // save any errors from validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // save data if there are no errors -> data.firstName, data.lastName,...
    const data = matchedData(req);

    // encrypt passwords
    try {
        const saltRounds = 10;
        data.password = await bcrypt.hash(data.password1, saltRounds);
    } catch (error) {
        console.log(`Error hashing password: ${error}`);
    }

    // inserting data into DB
    await db.insertUser(data);

    res.redirect("/log-in");
};

export default {
    signupGet,
    signupPost,
};