var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use((req, res, next) => {
	res.setHeader('Content-Type', 'application/json');
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Access-Control-Allow-Headers', '*');
	next();
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(upload.array());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
