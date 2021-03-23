// Global
const HOME = "/";
const SIGNUP = "/signup";
const SIGNIN = "/signin";
const SIGNOUT = "/signout";
const SEARCH = "/search";

// Users
const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Recipes
const RECIPE = "/recipe";
const UPLOAD = "/upload";
const RECIPE_DETAIL = "/:id";
const EDIT_RECIPE =  "/:id/edit";
const DELETE_RECIPE = "/:id/delete";

const routes = {
    home: HOME,
    signup: SIGNUP,
    signin: SIGNIN,
    signout: SIGNOUT,
    search: SEARCH,
    user: USER,
    recipe: RECIPE,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    upload: UPLOAD,
    recipeDetail: RECIPE_DETAIL,
    editRecipe: EDIT_RECIPE,
    delteRecipe: DELETE_RECIPE
}

export default routes;