// Import Module
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

// Import Router
const indexRouter = require('./backend/routes/index');
// const usersRouter = require('./backend/routes/users');
const apiRouter = require('./backend/routes/api.routes')

// Import Middleware
const errorMiddleware = require('./utils/error.middleware')

// Activate Express Module
const app = express();

// Middlewares
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Express Routing
app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api', apiRouter)

// Error Handlers
// Error Handlers
app.use(errorMiddleware.errorHandler); // Internal Server Error Handler
app.use(errorMiddleware.error404Handler); // Error 404 Handler

module.exports = app;
