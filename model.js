var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a schema
var Notes = new Schema({
    title: String,
    todos: [{}]
})

var Notes = mongoose.model('notes', Notes);

// make this available to our users in our Node applications
module.exports = { Notes };