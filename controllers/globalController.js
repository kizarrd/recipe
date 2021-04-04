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

export const kakaoSignin = passport.authenticate('kakao', {failureRedirect: routes.signin, }); // this one is to send the user to kakao

export const kakaoSigninCallback = async (_, __, profile, cb) => {

    // console.log(profile);

    const {
        id,
        username: name,
        _json: {
          kakao_account: { email },
        },
      } = profile;
      try {
        const user = await User.findOne({ email });
        if (user) {
          user.kakaoId = id;
          user.save();
          return cb(null, user);
        } else {
          const newUser = await User.create({
            email,
            name,
            kakaoId: id
          });
          return cb(null, newUser);
        }
      } catch (error) {
        return cb(error); // 여기서 cb함수는 passport에서 제공하는? 함수인데 cb(error)이런 식으로 error를 넣어주면 유저를 못찾았다는 뜻이고. 
        // 그게 아니라 유저를 찾았을때는 위에처럼 cb(null, newUser)를 해주면 에러가 없고 유저를 찾았다고 passport에 알려주는 것이다.
        // 이런 경우에 passport는 local strategy처럼 session에 로그인 정보 저장해주고 할거 해준다. 
      }



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
    res.redirect(routes.home);
}

export const signout = (req, res) => {
    //To Do: process sign out
    req.logout();
    res.redirect(routes.home);
};