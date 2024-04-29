const model = require('../models');

exports.getIndex = async (req, res, next) => {
    if (req.user.type === 'admin') {
        const users = await model.User.findAll();

        return res.render('user', {
            title: 'Users',
            users: users.map((user) => {
                return {
                    email: user.email,
                    type: user.type,
                    createdAt: user.createdAt.toDateString(),
                }
            }),
        });
    } else {
        return res.redirect('/unauthorized');
    }
}

exports.createUserView = (req, res, next) => {
    if (req.user.type === 'admin') {
        return res.render('create_user', {
            title: 'Create User',
        });
    } else {
        return res.redirect('/unauthorized');
    }
};

exports.createUser = async (req, res, next) => {
    const { email, type, password } = req.body;
    const { token } = req;
    if (req.user.type === 'admin') {
        const user = await model.User.create({
            email,
            type,
            password,
        });
        return res.redirect('/user?token=' + token);
    }
    return res.redirect('/unauthorized');
};

