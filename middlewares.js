import multer from "multer";
import routes from "./routes";

const multerImage = multer({ dest: "uploads/images/" });

export const localsMiddleWare = (req, res, next) => {
    res.locals.siteName = "RECIPE";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
};

export const uploadImage = multerImage.single("imageFile");