var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./backend/routes/index');
// var usersRouter = require('./backend/routes/users');
var apiRouter = require('./backend/routes/api.routes')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Express Routing
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api', apiRouter)

module.exports = app;
