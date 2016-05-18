'use strict';

const mongoose = require('mongoose');

module.exports = {
    create: function (request, response) {
        let model = request.params.model;
        let MongooseModel = mongoose.model(model);
        let instance = new MongooseModel();

        instance.title = 'model title';
        instance.save();

        response.send(model);
    },
    delete: function () {

    },
    find: function (request, response) {
        let model = request.params.model;
        let mongooseModel = mongoose.model(model);

        mongooseModel.find({}, function (err, data) {
            response.send(data);
        });
    },
    update: function () {

    }
};
