var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth.js');


router.post('/api/login', authController.login);
router.get('/login', authController.loginView);

module.exports = router;
