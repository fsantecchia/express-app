var express = require('express');
var TestController = require('./controllers/TestController')

var router = express.Router();

// route middleware that will happen on every request
router.use(function(req, res, next) {
    console.log(req.method, req.url);

    next(); 
});

router.post('/test', TestController.create);


router.get('/about', function(req, res) {
    res.send('im the about page!'); 
});

module.exports = router;