import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import recipeRouter from "./routers/recipeRouter";
import { localsMiddleWare } from "./middlewares";


const app = express();
const PORT = 3000;


//middlewares
app.use(helmet());
app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
    });
app.set('view engine', 'pug');
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));

app.use(localsMiddleWare);

// routings
app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.recipe, recipeRouter);

export default app;