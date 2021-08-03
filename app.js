// Import Module
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

// Import Router
const indexRouter = require('./server/routes/index');
const apiRouter = require('./server/routes/api.routes')
const usersRouter = require('./server/routes/users');

// Import Middleware
const errorMiddleware = require('./server/utils/error.middleware')

// Activate Express Module
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Express Routing
app.use('/', indexRouter);
app.use('/api/v1', apiRouter)
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(errorMiddleware.notFoundHandler);
// error handler
app.use(errorMiddleware.errorHandler);

module.exports = app;
