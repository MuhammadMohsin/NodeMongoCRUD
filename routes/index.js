var express = require('express');
var router = express.Router();
var users_controller = require('../controllers/users');

router.get('/', users_controller.user_getAll);

router.post('/create', users_controller.user_create);

router.get('/:id', users_controller.user_details);

router.put('/:id/update', users_controller.user_update);

router.delete('/:id/delete', users_controller.user_delete);


module.exports = router;