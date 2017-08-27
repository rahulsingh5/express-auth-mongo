import * as passport from 'passport';
import * as mongoose from 'mongoose';

const GoogleStrategy = require('passport-google-oauth20').Strategy;


import { config } from '../config/config';

const User = mongoose.model('users');

passport.serializeUser((user: any, done) => {
    done(null, user['id']);
});

passport.deserializeUser((id:any, done: any) => {

});

passport.use(new GoogleStrategy({
    clientID: config.googleClientID,
    clientSecret: config.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken: any, refreshToken: any, profile: any, done: any) => {
    User.findOne({ googleId: profile.id })
        .then((existingUser: any) => {
            if (existingUser) {
                //user already exists
                done(null, existingUser);
            } else {
                new User({ googleId: profile.id }).save().then(user => done(null, user));
            }
        });
}));