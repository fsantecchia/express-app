var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
    title     : String,
    body      : String
});


var Test = mongoose.model('Test', TestSchema);

module.exports = Test;