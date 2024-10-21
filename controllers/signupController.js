import { matchedData, validationResult } from "express-validator";

// GET /sign-up -> sign up form
function signupGet(req, res) {
    res.render("sign-up");
}

// POST /sign-up -> enter into the DB
function signupPost (req, res) {
    // save any errors from validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // save data if there are no errors -> data.firstName, data.lastName,...
    const data = matchedData(req);

    // inserting data into DB

    res.redirect("/log-in");
};

export default {
    signupGet,
    signupPost,
};