const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'poker_manager'
});

connection.connect((err) => {

    if (err) {
        console.log('Erro ao conectar no banco:', err);
    } else {
        console.log('Conectado ao MySQL!');
    }

});

module.exports = connection;