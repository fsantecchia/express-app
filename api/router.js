'use strict'

const _ = require('lodash');
const express = require('express');
const mongoose = require('mongoose');
const requireAll = require('require-all');

const commonController = require('./commonController');
const config = require('./../config');

let router = express.Router();

// route middleware that will happen on every request
router.use(function(req, res, next) {
    console.log(req.method, req.url);
    
    next(); 
});

//TODO: refactor these 2 lines
mongoose.model('Test', mongoose.Schema(require('./models/Test')));
mongoose.model('Test2', mongoose.Schema(require('./models/Test2')));

//Generate REST routes
const controllers = requireAll({
    dirname: __dirname +'/controllers',
    resolve: function (controller) {
        return _.extend({}, commonController, controller)
    }
});

const restController = function (request, response) {
    let action = config.restMap[request.method]
    let controller = request.params.model + 'Controller';

    controllers[controller][action](request, response)
};

router.route('/rest/:model').all(restController)
//Generate REST routes *end*

module.exports = router;