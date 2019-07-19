var students_route = require('./students');
var sections_route = require('./sections');

module.exports = function (app) {
    app.use('/students', students_route);
    app.use('/sections', sections_route)
};
