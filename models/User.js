"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    googleId: String
});
mongoose.model('users', userSchema);
