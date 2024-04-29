var indexRouter = require('../routes/index');
var userRouter = require('../routes/user');
var ticketRouter = require('../routes/ticket');
var authRouter = require('../routes/auth');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

module.exports = (app) => {

    // adds authentication middleware 
    app.use((req, res, next) => {
        const publicPaths = ['/auth/login', '/auth/api/login', '/unauthorized', 'server_error'];

        // check if the req.path is in the public paths 
        if (_.includes(publicPaths, req.path)) {
            return next();
        }

        // get token from request header or query string ( token )
        const token = req.headers['x-access-token'] || req.query.token;

        if (!token) {
            return res.render('login');
        } else {
            jwt.verify(token, 'secret', (err, decoded) => {
                if (err) {
                    return res.render('unauthorized');
                } else {
                    req.user = decoded;
                    next();
                }
            });
        
        }

    });

    app.use('/', indexRouter);
    app.use('/user',userRouter);
    app.use('/ticket',ticketRouter);
    app.use('/auth',authRouter);
    // !-- Do not remove this line --! //
};