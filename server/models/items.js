var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = mongoose.Schema({
	name: String // or this -> name: {type: String, required: [true, "Name is required"]},
}, { timestamps: true});

mongoose.model('Item', ItemSchema);

//^simple example of registering a model schema w/ timestamps