var path = require('path');
const hbs = require('handlebars');

module.exports = (app) => {
    app.set('views', path.join(__dirname,'..', 'views'));
    app.set('view engine', 'hbs');

    hbs.registerHelper('eq', function(a, b) {
        return a === b;
    });
};