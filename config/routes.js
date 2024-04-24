var indexRouter = require('../routes/index');
var userRouter = require('../routes/user');
var ticketRouter = require('../routes/ticket');
var authRouter = require('../routes/auth');

module.exports = (app) => {
    app.use('/', indexRouter);
    app.use('/user',userRouter);
    app.use('/ticket',ticketRouter);
    app.use('/auth',authRouter);
    // !-- Do not remove this line --! //
};