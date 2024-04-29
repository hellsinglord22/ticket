const _ = require('lodash');
const models = require('../models');

exports.createTicket = async (req, res, next) => {
            console.log('teh value of user: ', req.user);
    if (_.includes(['admin', 'student'], req.user.type)) {
        try {
            const { title, description } = req.body;
            const result = await models.Ticket.create({
                title,
                description,
                created_by: req.user.userId,
                assigned_to: null,
            });
            return res.status(200).json(result);
        } catch (err) {
            console.log('failed to create a ticket');
            return res.render('server_error');
        }
    }
    return res.render('unauthorized');
};


exports.createTicketView = (req, res, next) => {

    if (_.includes(['admin', 'student'], req.user.type)) {
        return res.render('create_ticket');
    }
    return res.render('unauthorized');
}