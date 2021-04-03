import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserShcema = new mongoose.Schema({
    name: String,
    email: String,
    avatarUrl: String,
    naverId: Number,
    kakaoId: Number
});

UserShcema.plugin(passportLocalMongoose, {usernameField: 'email'});

const model = mongoose.model("User", UserShcema);

export default model;