"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var mongoose = require("mongoose");
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var config_1 = require("../config/config");
var User = mongoose.model('users');
passport.serializeUser(function (user, done) {
    done(null, user['id']);
});
passport.deserializeUser(function (id, done) {
});
passport.use(new GoogleStrategy({
    clientID: config_1.config.googleClientID,
    clientSecret: config_1.config.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, function (accessToken, refreshToken, profile, done) {
    User.findOne({ googleId: profile.id })
        .then(function (existingUser) {
        if (existingUser) {
            //user already exists
            done(null, existingUser);
        }
        else {
            new User({ googleId: profile.id }).save().then(function (user) { return done(null, user); });
        }
    });
}));
