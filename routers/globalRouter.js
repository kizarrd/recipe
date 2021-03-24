import express from "express";
import { home } from "../controllers/recipeController";
import { signin, signout, signup, search } from "../controllers/globalController";
import routes from "../routes";

const globalRouter = express.Router();


globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.signin, signin);
globalRouter.get(routes.signup, signup);
globalRouter.get(routes.signout, signout);


export default globalRouter;