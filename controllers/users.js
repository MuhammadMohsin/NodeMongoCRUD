var User = require('../models/user');

exports.user_getAll = function (req, res) {
    User.find({}, function (err, users) {
        if (err)
            return res.send(err);
        res.send(users);
    })
};

exports.user_create = function (req, res) {
    var user = new User(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            gender: req.body.gender
        }
    );

    user.save(function (err) {
        if (err) {
            return res.send(err);
        }
        res.send('user Created successfully')
    })
};

exports.user_details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err)
            return res.send(err);
        res.send(user);
    })
};

exports.user_update = function (req, res) {
    console.log(req.body)
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, user) {
        if (err){
            console.log(err)
            return res.send(err);
        }
        res.send('user udpated.');
    });
};

exports.user_delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err)
            return res.send(err);
        res.send('Deleted successfully!');
    })
};