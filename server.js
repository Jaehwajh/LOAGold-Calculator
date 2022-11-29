const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require("connect-mongo")(session);
const methodOverride = require('method-override');
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database')
// .env config
require('dotenv').config({ path: "./config/.env"});
// Database connection
connectDB();
// Templating language
app.set("new engine", "ejs");
// Public Folder
app.use(express.static("public"));
// Body parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// Logging
app.use(logger("dev"));
// Method Override
app.use(methodOverride("_method"));
// Flash
app.use(flash());
// Server Notification
app.listen(process.env.PORT, () => {
    console.log("Server is up and running")
})

