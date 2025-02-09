const { createUser, authenticateUser } = require('../modelli/utenti');
const { validationResult } = require('express-validator');
const { registerUserValidators } = require('../validatori/utentiValidator');

const registerUser = [
    ...registerUserValidators,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { email, password } = req.body;
      try {
        await createUser(email, password);
        res.status(201).json({ message: 'Utente registrato con successo!' });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    }
  ];

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
    res.status(200).json({ message: 'Login effettuato con successo!', token: req.token });
};

const logoutUser = (req, res) => {
  res.status(200).json({ message: 'Logout con successo!' });
};

module.exports = {
    registerUser,
    loginUser,
    sendToken,
    logoutUser
};
