const { body } = require('express-validator');

const registerUserValidators = [
    body('email').isLength({ min: 3 }).withMessage('Il nome utente deve essere lungo almeno 3 caratteri'),
    body('password').isLength({ min: 8 }).withMessage('La password deve essere lunga almeno 8 caratteri')
      .matches(/[A-Z]/).withMessage('La password deve contenere almeno una lettera maiuscola')
      .matches(/[a-z]/).withMessage('La password deve contenere almeno una lettera minuscola')
      .matches(/\d/).withMessage('La password deve contenere almeno un numero'),
  ];
  

module.exports = {
  registerUserValidators, 
};
