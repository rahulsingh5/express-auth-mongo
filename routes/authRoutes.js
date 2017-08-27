"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
module.exports = function (app) {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    app.get('/auth/google/callback', passport.authenticate('google'));
};
