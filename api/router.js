const express = require('express');
const mongoose = require('mongoose');

var router = express.Router();

// route middleware that will happen on every request
router.use(function(req, res, next) {
    console.log(req.method, req.url);

    next(); 
});

module.exports = router;