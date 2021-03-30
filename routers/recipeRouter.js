import express from "express";
import { deleteRecipe, editRecipe, home, recipeDetail, getUpload, postUpload } from "../controllers/recipeController";
import { uploadImage } from "../middlewares";
import routes from "../routes";

const recipeRouter = express.Router();


recipeRouter.get(routes.home, home);

recipeRouter.get(routes.upload, getUpload);
recipeRouter.post(routes.upload, uploadImage, postUpload);

recipeRouter.get(routes.recipeDetail(), recipeDetail);
recipeRouter.get(routes.editRecipe, editRecipe);
recipeRouter.get(routes.deleteRecipe, deleteRecipe);

export default recipeRouter;