var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.js');

router.all('/',userController.getIndex);
router.get('/create',userController.createUserView);
router.post('/create',userController.createUser);


module.exports = router;
