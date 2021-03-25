import { recipes } from "../db";

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", recipes } );
};

export const upload = (req, res) => res.render("upload");
export const recipeDetail = (req, res) => res.render("recipeDetail");
export const editRecipe = (req, res) => res.render("editRecipe");
export const deleteRecipe = (req, res) => res.render("deleteRecipe");