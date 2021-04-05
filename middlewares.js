import multer from "multer";
import routes from "./routes";

const multerImage = multer({ dest: "uploads/images/" });

export const localsMiddleWare = (req, res, next) => {
    res.locals.siteName = "RECIPE";
    res.locals.routes = routes;
    console.log(req.user);
    res.locals.loggedUser = req.user || null;
    next();
};

export const onlyPublic = (req, res, next) => {
    if(req.user){
        res.redirect(routes.home);
    }else{
        next();
    }
}

export const onlyPrivate = (req, res, next) => {
    if(req.user){
        next();
    }else{
        res.redirect(routes.home);
    }
}

export const uploadImage = multerImage.single("imageFile");