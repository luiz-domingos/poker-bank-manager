const bcrypt = require('bcrypt');

const User = require('../models/userModel');


// REGISTER
exports.register = async (req, res) => {

    const { username, password } = req.body;

    const hashedPassword =
        await bcrypt.hash(password, 10);

    User.create(

        username,

        hashedPassword,

        (err) => {

            if (err) {

                return res.status(500).json({
                    message: 'Erro ao cadastrar usuário'
                });

            }

            res.status(201).json({
                message: 'Usuário cadastrado com sucesso'
            });

        }

    );

};


// LOGIN
exports.login = (req, res) => {

    const { username, password } = req.body;

    User.findByUsername(

        username,

        async (err, results) => {

            if (err) {

                return res.status(500).json(err);

            }

            if (results.length === 0) {

                return res.status(401).json({
                    message: 'Usuário não encontrado'
                });

            }

            const user = results[0];

            const validPassword =
                await bcrypt.compare(
                    password,
                    user.password
                );

            if (!validPassword) {

                return res.status(401).json({
                    message: 'Senha incorreta'
                });

            }

            res.status(200).json({
                message: 'Login realizado com sucesso'
            });

        }

    );

};