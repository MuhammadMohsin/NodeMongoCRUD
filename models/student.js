var mongoose = require('mongoose');
var Section = require('./section');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    sectionId: {type: Schema.Types.ObjectId, ref: 'Section'}
});

module.exports = mongoose.model('Student', StudentSchema);