import express from "express";
import { deleteRecipe, editRecipe, home, recipeDetail, upload } from "../controllers/recipeController";
import routes from "../routes";

const recipeRouter = express.Router();


recipeRouter.get(routes.home, home);
recipeRouter.get(routes.upload, upload);
recipeRouter.get(routes.recipeDetail, recipeDetail);
recipeRouter.get(routes.editRecipe, editRecipe);
recipeRouter.get(routes.deleteRecipe, deleteRecipe);

export default recipeRouter;