const _ = require('lodash');
const models = require('../models');

exports.createTicket = async (req, res, next) => {
    if (_.includes(['admin', 'student'], req.user.type)) {
        console.log('i got here my friend once');
        try {
            const { title, description } = req.body;
            const token = req.token;
            const result = await models.Ticket.create({
                title,
                description,
                created_by: req.user.userId,
                assigned_to: null,
            });

            if (result) {
                return res.json({ message: 'Ticket created successfully', ticket: result, token });
            }
            
        } catch (err) {
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

exports.editTicket = async (req, res, next) => {
    const token = req.token;
    try {
        await models.Ticket.update({
            ...req.body,
        }, {
            where: {
                id: req.params.id,
            }
        });
        return res.json({ message: 'Ticket updated successfully' });
    } catch (error) {
        return res.render('server_error');
    }

};