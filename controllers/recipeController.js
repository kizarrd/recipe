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


export const recipeDetail = async (req, res) => {
    const {
        params: {id}
    } = req;

    try{
        const recipe = await Recipe.findById(id);
        console.log(recipe);
        res.render("recipeDetail", { pageTitle: recipe.title , recipe });
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
}
export const getEditRecipe = async (req, res) => {
    const {
        params: {id}
    } = req;

    try{
        const recipe = await Recipe.findById(id);
        res.render("editRecipe", { pageTitle: `Edit ${recipe.title}`, recipe });
    }catch(error){
        res.redirect(routes.home);
    }

};

export const postEditRecipe = async (req, res) => {
    const {
        params: {id},
        body: {title, ingredients, recipe}
    } = req;

    try{
        await Recipe.findOneAndUpdate({ _id: id }, { title, ingredients, recipe } );
        res.redirect(routes.recipeDetail(id));
    }catch(error){
        res.redirect(routes.home);
    }

};

export const deleteRecipe = async (req, res) => {
    const {
        params: {id}
    } = req;

    try{
        await Recipe.findOneAndRemove({_id: id});
    }catch(error){
    }
    res.redirect(routes.home);
};