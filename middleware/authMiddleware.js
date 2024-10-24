export function isAuth(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({ message: "You are not authorized to view this resource." });
    }
}

export function setLocalsUser (req, res, next) {
    if (req.isAuthenticated()) res.locals.user = req.user; 
    next();
}

export function isAdmin(req, res, next) {

}