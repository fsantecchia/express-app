'use strict';

var angular = require('angular');
var ngRoute = require('angular-route');

var CommonFactory = require('./factories/CommonFactory');

var WelcomeCtrl = require('./controllers/WelcomeCtrl');

var routes = require('./routes');

var app = angular.module('myApp', [ngRoute]);


app.factory('CommonFactory', ['$http', '$q', CommonFactory])

app.controller('WelcomeCtrl', ['$scope', 'CommonFactory', WelcomeCtrl]);

app.config(['$routeProvider', routes]);