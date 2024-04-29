const _ = require('lodash');

exports.createTicket = (req, res, next) => {
};


exports.createTicketView = (req, res, next) => {

    console.log('the value of user type: ', req.user.type);
    if (_.includes(['admin', 'student'], req.user.type)) {
        return res.render('create_ticket');
    }
    return res.render('unauthorized');
}