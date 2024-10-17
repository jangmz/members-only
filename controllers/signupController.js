//import db from "../db/queries.js";

// GET /sign-up -> sign up form
function signupGet(req, res) {
    res.render("sign-up");
}

const signupController = {
    signupGet,
}

export default signupController;