var express = require('express');
var router = express.Router();
var ticketController = require('../controllers/ticket.js');

router.all('/',ticketController.getIndex);
// !-- Do not remove this line --! //

module.exports = router;
