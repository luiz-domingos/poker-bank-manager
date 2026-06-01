const express = require('express');

const cors = require('cors');


// CONEXÃO COM BANCO
require('./config/db');


// ROTAS
const sessionRoutes =
    require('./routes/sessionRoutes');

const userRoutes =
    require('./routes/userRoutes');


// APP
const app = express();


// MIDDLEWARES
app.use(cors());

app.use(express.json());


// ROTAS
app.use(sessionRoutes);

app.use(userRoutes);


// ROTA PRINCIPAL
app.get('/', (req, res) => {

    res.json({
        message: 'API Poker Bank Manager funcionando!'
    });

});


// PORTA
const PORT = 3000;


// SERVIDOR
app.listen(PORT, () => {

    console.log(
        `Servidor rodando na porta ${PORT}`
    );

});