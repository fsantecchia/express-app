'use strict'

const mongoose = require('mongoose');

module.exports = {
    create: function(request, response) {
//        var model = new mongooseClass();
//
//        model.title = "model title";
//        model.save();
//
//        response.send(model);
    },
    delete: function () {

    },
    find: function (request, response) {
        let model = request.params.model;
        let mongooseModel = mongoose.model(model);
        
        mongooseModel.find({}, function(err, data) {
            response.send(data);  
        });
    },
    update: function () {

    }
};