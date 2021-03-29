import routes from "../routes";
import Recipe from "../models/Recipe";

export const home = async (req, res) => {
    try{
        const recipes = await Recipe.find({});
        res.render("home", { pageTitle: "Home", recipes } );
    }catch(error){
        console.log(error);
        res.render("home", { pageTitle: "Home", recipes: [] } );
    }
};

export const search = async (req, res) => {
    try{
        const recipes = await Recipe.find({});
        res.render("search", { searchingBy: req.query.term, recipes });
    }catch(error){
        console.log(error);
        res.render("search", { searchingBy: req.query.term, recipes: [] });
    }
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
    console.log(file, title, ingredients, recipe);
    res.redirect(routes.recipeDetail(343242));
};




export const recipeDetail = (req, res) => {
    res.render("recipeDetail", { pageTitle: "Recipe Detail" });
}
export const editRecipe = (req, res) => res.render("editRecipe");
export const deleteRecipe = (req, res) => res.render("deleteRecipe");