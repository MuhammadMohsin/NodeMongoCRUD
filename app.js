var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set up mongoose connection
var MONGODB_URI = 'mongodb+srv://mohsin:test@cluster0-valr7.mongodb.net/test?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('open', () => console.log("MongoDB connected successfully!"));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/users', indexRouter);

module.exports = app;
