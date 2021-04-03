import express from "express";
import { deleteRecipe, home, recipeDetail, getUpload, postUpload, getEditRecipe, postEditRecipe } from "../controllers/recipeController";
import { onlyPrivate, uploadImage } from "../middlewares";
import routes from "../routes";

const recipeRouter = express.Router();


recipeRouter.get(routes.home, home);

recipeRouter.get(routes.upload, onlyPrivate, getUpload);
recipeRouter.post(routes.upload, onlyPrivate, uploadImage, postUpload);

recipeRouter.get(routes.recipeDetail(), recipeDetail);

recipeRouter.get(routes.editRecipe(), onlyPrivate, getEditRecipe);
recipeRouter.post(routes.editRecipe(), onlyPrivate, postEditRecipe);

recipeRouter.get(routes.deleteRecipe(), onlyPrivate, deleteRecipe);

export default recipeRouter;