var viewConfig = require('./config/view');
var errorConfig = require('./config/error');
var utilitiesConfig = require('./config/utilities');
var routesConfig = require('./config/routes');
require('./models/index');
var setupCronJobs = require('./config/cron.js');

var express = require('express');

var app = express();


setupCronJobs(app);
viewConfig(app);
utilitiesConfig(app);
routesConfig(app);
errorConfig(app);

module.exports = app;
