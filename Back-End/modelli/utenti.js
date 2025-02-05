const sql = require('../configurazioni/dbConf')
const bcrypt = require('bcryptjs');

const createUser = async (email, password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = `INSERT INTO Utenti (email, password) VALUES (@email, @password)`;
        const request = new sql.Request();
        request.input('email', sql.VarChar, email);
        request.input('password', sql.VarChar, hashedPassword);

        const result = await request.query(query);
        return result;
    } catch (err) {
        console.error('Errore nella creazione dell\'utente:', err);
        throw err;
    }
};

const getUserByUsername = async (email) => {
    const query = `SELECT * FROM Utenti WHERE email = @email`;
    const request = new sql.Request();
    request.input('email', sql.VarChar, email);

    try {
        const result = await request.query(query);
        return result.recordset[0];
    } catch (err) {
        console.error('Errore nel recupero dell\'utente:', err);
        throw err;
    }
};

const authenticateUser = async (email, password) => {
    try {
        const user = await getUserByUsername(email);
        if (!user) {
            throw new Error('Utente non trovato');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Password non corretta');
        }

        return user;
    } catch (err) {
        console.error('Errore nell\'autenticazione dell\'utente:', err);
        throw err;
    }
}

module.exports = {
    createUser,
    getUserByUsername,
    authenticateUser
};

