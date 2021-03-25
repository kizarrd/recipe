import { recipes } from "../db";
import routes from "../routes";

export const search = (req, res) => {
    res.render("search", { searchingBy: req.query.term, recipes });
};
export const getSignup = (req, res) => {
    res.render("signup", { pageTitle: "Sign Up"});
};
export const postSignup = (req, res) => {
    const pw1 = req.body.password
    const pw2 = req.body.password2
    if(pw1 != pw2){
        res.status(400);
        res.render("signup", { pageTitle: "Sign Up"});
    }else{
        // To Do: register user
        // To Do: Log User In
        res.redirect(routes.home);
    }
};
export const getSignin = (req, res) => res.render("signin");
export const postSignin = (req, res) => {
    res.redirect(routes.home);
}


export const signout = (req, res) => {
    //To Do: process sign out
    res.redirect(routes.home);
} 