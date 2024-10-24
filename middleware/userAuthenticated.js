export function userAuthenticated (req, res, next) {
    req.isAuthenticated() ? res.locals.user = req.user : res.locals.user = null;
    next();
}