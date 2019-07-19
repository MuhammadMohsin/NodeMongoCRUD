var Student = require('../models/student');

exports.students_getAll = function (req, res) {
    Student.find({}, function (err, students) {
        if (err)
            return res.send(err);
        res.send(students);
    })
};

exports.students_create = function (req, res) {
    var student = new Student(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            gender: req.body.gender
        }
    );

    student.save(function (err) {
        if (err) {
            return res.send(err);
        }
        res.send('student Created successfully')
    })
};

exports.students_details = function (req, res) {
    Student.findById(req.params.id, function (err, student) {
        if (err)
            return res.send(err);
        res.send(student);
    })
};

exports.students_update = function (req, res) {
    Student.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, student) {
        if (err){
            console.log(err)
            return res.send(err);
        }
        res.send('student udpated.');
    });
};

exports.students_delete = function (req, res) {
    Student.findByIdAndRemove(req.params.id, function (err) {
        if (err)
            return res.send(err);
        res.send('Deleted successfully!');
    })
};