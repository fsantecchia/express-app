const concat = require('gulp-concat');
const gulp = require('gulp');
const mongoose = require('mongoose');
//const insert = require('gulp-insert');
const _ = require('lodash');

var router = require('./../api/router');

const commonController = function (mongooseClass) {
    return {
        create: function(request, response) {
            var model = new mongooseClass();

            model.title = "model title";
            model.save();

            response.send(model);
        },
        delete: function () {

        },
        find: function (request, response) {
            mongooseClass.find({}, function(err, data) {
                response.send(data);  
            });
        },
        update: function () {

        }
    };
}

const models = [
    'Test'
];

const generateDefaultRestUrls = function () {
    _.forEach(models, function (model) {
        
        var attributes = require(`./../api/models/${model}`);
        var mongooseSchema = new mongoose.Schema(attributes);
        var mongooseClass = mongoose.model(model, mongooseSchema);
        var specificController = require(`./../api/controllers/${model}Controller`);
        var controller = _.extend({}, commonController(mongooseClass), specificController);
        var url = `/${model.toLowerCase()}`;

        router.get(url, controller.find);
        router.post(url, controller.create);
        router.put(url, controller.update);
        router.delete(url, controller.delete);
    })    
    
    return router;
};

module.exports = generateDefaultRestUrls();