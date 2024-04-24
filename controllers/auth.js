const model = require('../models/index');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {
    try {
        const result = await model.User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        });
        if (result) {
            const token = jwt.sign({
                email: result.email,
                userId: result.id,
                type: result.type,
            }, 'secret', { expiresIn: '1h' });
            return res.status(200).json({ message: 'Login successful', token: token });
        }
        return res.status(401).json({ message: 'Login failed' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Login failed', error: error });
    }
};

exports.loginView = (req, res, next) => {
    res.render('login');
};

