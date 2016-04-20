var Test = require('./../models/Test');

var TestController = {};

TestController.create = function(req, res) {
    
    m = new Test();
    m.title = "HOLA";
    m.save();
    
    res.send('im the about page!'); 
}


module.exports = TestController;
