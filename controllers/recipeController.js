import { recipes } from "../db";
import routes from "../routes";

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", recipes } );
};



export const getUpload = (req, res) =>{
    res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = (req, res) => {
    const{
        body: {
            file,
            title,
            ingredients,
            recipe
        }
    } = req;
    res.redirect(routes.recipeDetail(343242));
};




export const recipeDetail = (req, res) => {
    res.render("recipeDetail", { pageTitle: "Recipe Detail" });
}
export const editRecipe = (req, res) => res.render("editRecipe");
export const deleteRecipe = (req, res) => res.render("deleteRecipe");