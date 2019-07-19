var Section = require('../models/section');

exports.section_create = function (req, res) {
    var section = new Section({
        sectionName: req.body.sectionName,
        sectionVenue: req.body.sectionVenue,
        sectionTime: req.body.sectionTime
    });

    section.save(function (err) {
        if (err)
            return res.send(err);
        res.send("Section created successfully");
    })
}

exports.section_getAll = function (req, res) {
    Section.find(function (err, sections) {
        if (err)
            return res.send(err)
        res.send(sections);
    })
}