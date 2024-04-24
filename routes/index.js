var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.js');
/* GET home page. */
router.get('/', indexController.getIndex);
router.get('/unauthorized', indexController.unauthorized);
router.get('/server_error', indexController.internalServerError);

module.exports = router;
