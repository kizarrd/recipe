import routes from "./routes";

export const localsMiddleWare = (req, res, next) => {
    res.locals.siteName = "RECIPE";
    res.locals.routes = routes;
    next();
};