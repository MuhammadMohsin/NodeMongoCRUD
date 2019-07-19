var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true}
});

module.exports = mongoose.model('User', UserSchema);