const { createUser, authenticateUser } = require('../modelli/utenti');

const registerUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        await createUser(email, password);
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await authenticateUser(email, password);
        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
};

const sendToken = (req, res) => {
    res.status(200).json({ message: 'Login successful!', token: req.token });
};

const logoutUser = (req, res) => {
  res.status(200).json({ message: 'Logout successful!' });
};

module.exports = {
    registerUser,
    loginUser,
    sendToken,
    logoutUser
};
