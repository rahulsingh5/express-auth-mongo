"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var config_1 = require("./config/config");
require('./models/User');
require('./services/passport');
mongoose.connect(config_1.config.mongoURI);
var app = express();
require('./routes/authRoutes')(app);
app.listen(config_1.config.PORT, function () {
    console.log("server is listening at port " + config_1.config.PORT);
});
