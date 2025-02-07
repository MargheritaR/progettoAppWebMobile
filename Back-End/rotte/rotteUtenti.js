const express = require('express');
const { registerUser, loginUser, sendToken, logoutUser } = require('../controller/utentiController');
const generateToken = require('../middleware/jwtMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser, generateToken, sendToken);
router.post('/logout', logoutUser);

module.exports = router;