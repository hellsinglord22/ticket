var express = require('express');
var router = express.Router();
var ticketController = require('../controllers/ticket.js');

router.get('/create',ticketController.createTicketView);

module.exports = router;
