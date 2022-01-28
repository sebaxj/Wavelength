// import packages
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Express instance: 'app'
const app = express();

// import routes
const indexRoutes = require('./routes/index.routes.js');
const userRoutes = require('./routes/user.routes.js');

// connect server to database

// send fetch requests to the router
app.use('/', indexRoutes);
app.use('/users', userRoutes);

// make exportable so that it can be seen by other files
module.exports = app;
