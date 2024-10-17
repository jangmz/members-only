//import db from "../db/queries.js";

// GET / -> homepage
function homeGet(req, res) {
    res.render("index");
}

const homeController = {
    homeGet,
}

export default homeController;