import express from "express";
import { changePassword, editProfile, userDetail, userHome } from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();


userRouter.get(routes.home, userHome);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;