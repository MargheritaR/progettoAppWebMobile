const jwt = require('jsonwebtoken');
const config = require('../configurazioni/jwtConf');

const generateToken = (req, res, next) => {
    const user = req.user;

    if (!user) {
        return res.status(401).json({ error: 'User not authenticated' });
    }

    const token = jwt.sign({ email: user.email }, config.jwtSecret, { expiresIn: '1h' });
    req.token = token;

    next();
};

module.exports = generateToken;
