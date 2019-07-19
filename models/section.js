var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SectionSchema = new Schema({
    sectionName: {type: String, required: true},
    sectionVenue: {type: String, required: true},
    sectionTime: {type: Date, required: true},
});

module.exports = mongoose.model('Section', SectionSchema);