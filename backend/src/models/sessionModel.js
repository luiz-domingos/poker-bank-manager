const db = require('../config/db');

const Session = {

    // LISTAR TODAS AS SESSÕES
    getAll: (callback) => {

        const sql = 'SELECT * FROM sessions';

        db.query(sql, callback);

    },

    // BUSCAR SESSÃO POR ID
    getById: (id, callback) => {

        const sql = 'SELECT * FROM sessions WHERE id = ?';

        db.query(sql, [id], callback);

    },

    // CRIAR NOVA SESSÃO
    create: (data, callback) => {

        const sql = `
            INSERT INTO sessions
            (
                session_date,
                room,
                game_type,
                stake,
                buy_in,
                cash_out,
                profit,
                notes
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            data.session_date,
            data.room,
            data.game_type,
            data.stake,
            data.buy_in,
            data.cash_out,
            data.profit,
            data.notes
        ];

        db.query(sql, values, callback);

    },

    // ATUALIZAR SESSÃO
    update: (id, data, callback) => {

        const sql = `
            UPDATE sessions
            SET
                session_date = ?,
                room = ?,
                game_type = ?,
                stake = ?,
                buy_in = ?,
                cash_out = ?,
                profit = ?,
                notes = ?
            WHERE id = ?
        `;

        const values = [
            data.session_date,
            data.room,
            data.game_type,
            data.stake,
            data.buy_in,
            data.cash_out,
            data.profit,
            data.notes,
            id
        ];

        db.query(sql, values, callback);

    },

    // DELETAR SESSÃO
    delete: (id, callback) => {

        const sql = 'DELETE FROM sessions WHERE id = ?';

        db.query(sql, [id], callback);

    }

};

module.exports = Session;