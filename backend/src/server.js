const express = require('express');
const cors = require('cors');

require('./config/db');

const sessionRoutes = require('./routes/sessionRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(sessionRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'API Poker Bank Manager funcionando!'
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});