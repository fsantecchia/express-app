const apiRouter = require('./tasks/api');
const express = require('express');
const mongoose = require('mongoose');
console.log(apiRouter);
const baseApiURL = '/api';
const server = express();
const serverPort = 5000;
const targetURL = express.static('./target');

const startServer = function () {
    server.use(targetURL);
    server.use(baseApiURL, apiRouter);

    mongoose.connect('mongodb://localhost/test');

    server.listen(serverPort);
};


module.exports = startServer;