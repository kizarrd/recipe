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

export const postUpload = async (req, res) => {
    const{
        body: { title, ingredients, recipe },
        file: { path }
    } = req;

    const newRecipe = await Recipe.create({
        fileUrl: path,
        title,
        ingredients,
        recipe
    })

    console.log(newRecipe)
    res.redirect(routes.recipeDetail(newRecipe.id));
};


export const recipeDetail = (req, res) => {
    res.render("recipeDetail", { pageTitle: "Recipe Detail" });
}
export const editRecipe = (req, res) => res.render("editRecipe");
export const deleteRecipe = (req, res) => res.render("deleteRecipe");