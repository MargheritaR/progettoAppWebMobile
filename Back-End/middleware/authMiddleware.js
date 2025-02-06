const jwt = require('jsonwebtoken');
const config = require('../configurazioni/jwtConf');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Token mancante' });
    }

    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(400).json({ error: 'Formato del token non valido' });
    }

    const token = tokenParts[1];

    if (!token) {
        return res.status(401).json({ error: 'Token mancante' });
    }

    jwt.verify(token, config.jwtSecret, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token non valido' });
        }

        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
