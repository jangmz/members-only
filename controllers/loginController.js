//import db from "../db/queries.js";

// GET /log-in -> show form
function loginGet(req, res) {
    res.render("log-in");
}

// POST /log-in -> check log in in db
function loginPost(req, res) {
    console.log("Check log in");
    res.redirect("/");
}

export default {
    loginGet,
    loginPost,
};