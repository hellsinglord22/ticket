const models = require('../models');

exports.getIndex = async (req, res, next) => {

    let tickets = [];
    const include = [
        {
            model: models.User,
            as: 'creator'
        },
        {
            model: models.User,
            as: 'assignee'
        },
    ];
    try {
        if (req.user.type === 'admin') {
            tickets = await models.Ticket.findAll({ include }); 
        } else if (req.user.type === 'student') {
            tickets = await models.Ticket.findAll({
                where: {
                    created_by: req.user.userId
                },
                include,
            });
        } else if (req.user.type === 'tech') {
            tickets = await models.Ticket.findAll({
                where: {
                    assigned_to: req.user.userId,
                    status: 'in-progress',
                },
                include,
            });
        } else {
            return res.render('unauthorized');
        }

    } catch(error) {
        return res.render('server_error');
    }


    tickets = tickets.map((ticket) =>  {
        return {
            id: ticket.id,
            title: ticket.title,
            description: ticket.description,
            status: ticket.status,
            created_by: ticket.creator.email,
            assigned_to: ticket.assignee ? ticket.assignee.email : 'Unassigned',
            createdAt: ticket.createdAt.toDateString(),
        };
    });


    return res.render('index', {
        title: 'Swift Ticket',
        name: req.user.email,
        role: req.user.type,
        isTech: req.user.type === 'tech',
        tickets: tickets,
    });
}

exports.unauthorized = (req, res, next) => {
    res.render('unauthorized');
}

exports.internalServerError = (req, res, next) => {
    res.render('server_error');
}