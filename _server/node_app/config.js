'use strict';

var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//DB
//TODO: move DB init to separate module
var mongoose = require('mongoose');

var app = express();

// getting client platform
// var optimist = require('optimist');
// var client = (optimist.argv.client || 'angular') + '_app';

//getting _client dir
var clientDir = path.resolve('_client/dist');
app.set('clientDir', clientDir);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//A BIG security hole right here. TODO: figure out what assets should be shared
app.use(express.static(clientDir));

//setting routes
require('./router')(app);