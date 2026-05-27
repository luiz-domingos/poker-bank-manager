const Session = require('../models/sessionModel');

exports.getAllSessions = (req, res) => {

    Session.getAll((err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(results);

    });

};

exports.createSession = (req, res) => {

    const data = req.body;

    Session.create(data, (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(201).json({
            message: 'Sessão cadastrada com sucesso!',
            id: results.insertId
        });

    });

};
exports.getSessionById = (req, res) => {

    const id = req.params.id;

    Session.getById(id, (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: 'Sessão não encontrada'
            });
        }

        res.status(200).json(results[0]);

    });

};