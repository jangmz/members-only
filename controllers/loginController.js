import db from "../db/queries.js";
import passport from "passport";
import LocalStrategy from "passport-local";
import bcrypt from "bcryptjs";

// GET /log-in -> show form
function loginGet(req, res) {
    res.render("log-in");
}

// POST /log-in -> check log in in db
function loginPost(req, res) {
    console.log("Check log in");
    res.redirect("/");
}

// LocalStrategy setup
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        // find username which is trying to log in
        const user = db.findUsername(username);
        console.log(user);
        if (!user) return done(null, false, { message: "Incorrect username!" });

        // password comparison -> plain to hashed
        const match = await bcrypt.compare(password, user.password);

        if (!match) return done(null, false, { message: "Incorrect password!" });

        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));

export default {
    loginGet,
    loginPost,
};