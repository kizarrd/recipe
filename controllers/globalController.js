import "../db";
import passport from "passport";
import routes from "../routes";
import User from "../models/User";

// export const search = (req, res) => {
//     res.render("search", { searchingBy: req.query.term, recipes });
// };
export const getSignup = (req, res) => {
    res.render("signup", { pageTitle: "Sign Up"});
};
export const postSignup = async (req, res, next) => {
    const {
        body:  {name, email, password, password2 }
    } = req;
    if(password != password2){
        res.status(400);
        res.render("signup", { pageTitle: "Sign Up"});
    }else{
        // To Do: register user
        // To Do: Log User In
        try {            
            const user = await User({
                name,
                email
            }); 
            await User.register(user, password);
            next();
        } catch(error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};

export const getSignin = (req, res) => {
    res.render("signin", { pageTitle: "Sign In" } );
}
export const postSignin = passport.authenticate("local", {
    failureRedirect: routes.signin,
    successRedirect: routes.home
});

export const kakaoSignin = passport.authenticate('kakao', {failureRedirect: '#!/login', });

export const kakaoSigninCallback = (_, __, profile, done) => {
    // const { _json: { id, avatarUrl, name, email: } } = profile;
    // console.log(accessToken, refreshToken, profile, done);
    // User.findOne(
    //     {
    //         'kakao.id': profile.id,
    //     },
    //     function(err, user) {
    //         if (err) {
    //             return done(err)
    //         }
    //         if (!user) {
    //             user = new User({
    //                 name: profile.username,
    //                 username: profile.id,
    //                 roles: ['authenticated'],
    //                 provider: 'kakao',
    //                 kakao: profile._json,
    //             })

    //             user.save(function(err) {
    //                 if (err) {
    //                     console.log(err)
    //                 }
    //                 return done(err, user)
    //             })
    //         } else {
    //             return done(err, user)
    //         }
    //     }
    // )
};

export const postKakaoSignin = (req, res) => {
    res.send(routes.home);
}

export const signout = (req, res) => {
    //To Do: process sign out
    req.logout();
    res.redirect(routes.home);
};