import express from "express";
import { home } from "../controllers/recipeController";
import { getSignin, postSignin, signout, getSignup, postSignup, search } from "../controllers/globalController";
import routes from "../routes";

const globalRouter = express.Router();


globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.signup, getSignup);
globalRouter.post(routes.signup, postSignup);

globalRouter.get(routes.signin, getSignin);
globalRouter.post(routes.signin, postSignin);

globalRouter.get(routes.signout, signout);


export default globalRouter;