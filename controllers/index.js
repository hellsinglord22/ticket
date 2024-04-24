exports.getIndex = (req, res, next) => {
    res.render('index', { title: 'Ticket System' });
}

exports.unauthorized = (req, res, next) => {
    res.render('unauthorized');
}

exports.internalServerError = (req, res, next) => {
    res.render('server_error');
}