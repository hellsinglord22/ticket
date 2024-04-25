exports.getIndex = (req, res, next) => {
    res.render('index', { title: 'Swift Ticket' });
}

exports.unauthorized = (req, res, next) => {
    res.render('unauthorized');
}

exports.internalServerError = (req, res, next) => {
    res.render('server_error');
}