var indexRouter = require('../routes/index');
var userRouter = require('../routes/user');
var ticketRouter = require('../routes/ticket');

module.exports = (app) => {
    app.use('/', indexRouter);
    app.use('/user',userRouter);
    app.use('/ticket',ticketRouter);
    // !-- Do not remove this line --! //
};