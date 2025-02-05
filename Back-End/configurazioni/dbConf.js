const sql = require('mssql');

const config = {
    user: 'prova',
    password: 'prova',
    server: 'localhost',
    database: 'ProvaWebMobile',
    options : {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS',
    },
    port:1433
};

sql.connect(config, (err) => {
    if (err) {
        console.error('Errore nella connessione al database:', err);
        return;
    }

    console.log('Connessione al database riuscita');
});

module.exports = sql;