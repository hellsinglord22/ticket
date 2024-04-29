const models = require('../models');

exports.getIndex = async (req, res, next) => {

    let tickets = [];
    try {
        if (req.user.type === 'admin') {
            tickets = await models.Ticket.findAll({}); 
        } else if (req.user.type === 'student') {
            tickets = await models.Ticket.findAll({
                where: {
                    created_by: req.user.userId
                }
            });
        } else if (req.user.type === 'tech') {
            tickets = await models.Ticket.findAll({
                where: {
                    assigned_to: req.user.userId
                }
            });
        } else {
            return res.render('unauthorized');
        }

    } catch(error) {
        console.error(error);
        return res.render('server_error');
    }

    console.log(JSON.stringify(tickets, null, 2));
    return res.render('index', {
        title: 'Swift Ticket',
        name: req.user.email,
        tickets: tickets,
    });
}

exports.unauthorized = (req, res, next) => {
    res.render('unauthorized');
}

exports.internalServerError = (req, res, next) => {
    res.render('server_error');
}