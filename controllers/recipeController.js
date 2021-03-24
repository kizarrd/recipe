export const home = (req, res) => res.render("home", { pageTitle: "Home"} );

// export const search = (req, res) => {
//     res.render("search", { searchingBy: req.query.term });
// };

export const upload = (req, res) => res.render("upload");
export const recipeDetail = (req, res) => res.render("recipeDetail");
export const editRecipe = (req, res) => res.render("editRecipe");
export const deleteRecipe = (req, res) => res.render("deleteRecipe");