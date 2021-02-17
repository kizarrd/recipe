import express from "express";
import routes from "../routes";

const recipeRouter = express.Router();


recipeRouter.get("/", (req,res) => res.send('recipe'));

export default recipeRouter;