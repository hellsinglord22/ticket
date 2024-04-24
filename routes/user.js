var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.js');

router.all('/',userController.getIndex);
// !-- Do not remove this line --! //

module.exports = router;
