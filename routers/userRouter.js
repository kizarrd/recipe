import express from "express";
import routes from "../routes";

const userRouter = express.Router();


userRouter.get("/", (req,res) => res.send('user profile'));
userRouter.get(routes.editProfile, (req,res) => res.send('user profile edit'));

export default userRouter;