var express = require('express');
var router = express.Router();
var section_controller = require('../controllers/section');

router.get('/', section_controller.section_getAll);

router.post('/create', section_controller.section_create);

module.exports = router;