import express from "express";
import { deleteRecipe, home, recipeDetail, getUpload, postUpload, getEditRecipe, postEditRecipe } from "../controllers/recipeController";
import { uploadImage } from "../middlewares";
import routes from "../routes";

const recipeRouter = express.Router();


recipeRouter.get(routes.home, home);

recipeRouter.get(routes.upload, getUpload);
recipeRouter.post(routes.upload, uploadImage, postUpload);

recipeRouter.get(routes.recipeDetail(), recipeDetail);

recipeRouter.get(routes.editRecipe(), getEditRecipe);
recipeRouter.post(routes.editRecipe(), postEditRecipe);

recipeRouter.get(routes.deleteRecipe(), deleteRecipe);

export default recipeRouter;