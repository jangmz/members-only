//import db from "../db/queries.js";

// GET /log-in
function loginGet(req, res) {
    res.render("log-in");
}

const loginController = {
    loginGet,
}

export default loginController;