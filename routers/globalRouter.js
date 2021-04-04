import express from "express";
import { home, search } from "../controllers/recipeController";
import { getSignin, postSignin, signout, getSignup, postSignup, kakaoSignin, postKakaoSignin } from "../controllers/globalController";
import routes from "../routes";
import passport from "passport";
import { onlyPrivate, onlyPublic } from "../middlewares";

const globalRouter = express.Router();


globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.signup, onlyPublic, getSignup);
globalRouter.post(routes.signup, onlyPublic, postSignup, postSignin);

globalRouter.get(routes.signin, onlyPublic, getSignin);
globalRouter.post(routes.signin, onlyPublic, postSignin);

globalRouter.get(routes.signout, onlyPrivate, signout);

globalRouter.get(routes.kakao, kakaoSignin);
globalRouter.get(
    routes.kakaoCallback, 
    passport.authenticate('kakao', {failureRedirect: routes.signin,}), // this one is to receive the user from kakao, used as a middleware
    postKakaoSignin
);

export default globalRouter;