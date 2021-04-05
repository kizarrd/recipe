import routes from "../routes";
import User from "../models/User";


export const userHome = (req, res) => res.render("userProfile");
// export const signup = (req, res) => res.render("signup");
// export const signin = (req, res) => res.render("signin");
// export const signout = (req, res) => res.render("signout");

export const editProfile = (req, res) => res.render("editProfile");
export const userDetail = async (req, res) => {
    const { params: {id} } = req;
    try{
        const user = await User.findById(id);
        res.render("userDetail" , { pageTitle: "User Detail", user } );
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
}
export const changePassword = (req, res) => res.render("changePassword");

// export const myDetail = (req, res) => {
//     res.render("userDetail" , { pageTitle: "User Profile", user: req.user } );
// };