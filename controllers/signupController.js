import db from "../db/queries.js";

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