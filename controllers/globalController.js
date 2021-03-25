import { recipes } from "../db";

export const search = (req, res) => {
    res.render("search", { searchingBy: req.query.term, recipes });
};
export const signup = (req, res) => res.render("signup");
export const signin = (req, res) => res.render("signin");
export const signout = (req, res) => res.render("signout");