const express = require('express');
const getTabelaBrasileirao = require('./scraper');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/tabela', async(req, res) => {
    try {
        const tabela = await getTabelaBrasileirao();
        res.json(tabela);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao obter dados' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});