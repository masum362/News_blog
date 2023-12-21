import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ email: username });

      if (!user) {
        return done(null, false, { message: "not getting user" });
      }
      if (user) {
        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false, { message: "password mismatch" });
        }

        return done(null, user);
      }
    } catch (error) {
      console.log(error);
      return done(error);
    }
  })
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      console.log(profile);
      const isNewUser = await User.findOne({ gogleId: profile.id });
      if (isNewUser) {
        const updatedUser = await User.updateOne(
          { gogleId: profile.id },
          { $set: { photoURL: profile.photos[0].value } }
        );
        console.log({ updatedUser });
        return cb(null, isNewUser);
      } else {
        const user = await User({
          name: profile.displayName,
          gogleId: profile.id,
          photoURL: profile.photos[0].value,
        });
        user.save();
        return cb(null, user);
      }
   nul }
  )
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  console.log({id})
  await User.findById(id).then( (user) => {
    return done(null, user);
  }).catch( (err) => {done(null , err)});
});

export const checkAuth = (req, res, next) => {
  try {
    console.log('checkAuth CALLING');
    if (!req.isAuthenticated()) {

      console.log(req.isAuthenticated())
      return res.status(404).json({ message: "user not authorized" });
    }
    console.log('authentication' , req.isAuthenticated())
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
