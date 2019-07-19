var express = require('express');
var router = express.Router();
var students_controller = require('../controllers/students');

router.get('/', students_controller.students_getAll);

router.post('/create', students_controller.students_create);

router.get('/:id', students_controller.students_details);

router.put('/:id/update', students_controller.students_update);

router.delete('/:id/delete', students_controller.students_delete);


module.exports = router;