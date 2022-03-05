const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username
        user: 'root',
        password: '',
        database: 'election',
    },
);


module.exports = db;