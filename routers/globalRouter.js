import express from "express";
import routes from "../routes";

const globalRouter = express.Router();


globalRouter.get("/", (req,res) => res.send('home'));
globalRouter.get(routes.signup, (req,res) => res.send('signup'));
globalRouter.get(routes.signin, (req,res) => res.send('signin'));
globalRouter.get(routes.signout, (req,res) => res.send('signout'));
globalRouter.get(routes.search, (req,res) => res.send('search'));


export default globalRouter;