import passport from "passport";
import KakaoStrategy from "passport-kakao";
import { kakaoSigninCallback } from "./controllers/globalController";
import User from "./models/User";
import routes from "./routes";


passport.use(User.createStrategy());

passport.use(
    new KakaoStrategy(
        {
            clientID : process.env.KAKAO_ID,
            clientSecret: process.env.KAKAO_SECRET,
            callbackURL :  `http://localhost:3000${routes.kakaoCallback}`
        },
        kakaoSigninCallback
    )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
