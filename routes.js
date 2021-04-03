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

// Kakao
const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/auth/kakao/callback";

const routes = {
    home: HOME,
    signup: SIGNUP,
    signin: SIGNIN,
    signout: SIGNOUT,
    search: SEARCH,
    user: USER,
    recipe: RECIPE,
    userDetail: (id) => {
        if(id){
            return `/user/${id}`;
        }else{
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    upload: UPLOAD,
    recipeDetail: (id) => {
        if(id){
            return `/recipe/${id}`;
        }else{
            return RECIPE_DETAIL;
        }
    },
    editRecipe: (id) => {
        if(id){
            return `/recipe/${id}/edit`
        }else{
            return EDIT_RECIPE;
        }
    },
    deleteRecipe: (id) => {
        if(id){
            return `/recipe/${id}/delete`;
        }else{
            return DELETE_RECIPE;
        }
    },
    kakao: KAKAO,
    kakaoCallback: KAKAO_CALLBACK
};

export default routes;