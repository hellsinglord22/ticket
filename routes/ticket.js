var express = require('express');
var router = express.Router();
var ticketController = require('../controllers/ticket.js');

router.get('/create',ticketController.createTicketView);
router.post('/create',ticketController.createTicket);
router.put('/:id',ticketController.editTicket);


module.exports = router;
