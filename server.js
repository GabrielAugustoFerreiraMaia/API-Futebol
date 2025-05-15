const express = require('express');
const { getTabelaBrasileirao, getArtilharia } = require('./scraper');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/serie-a/tabela', async (req, res) => {
    try {
        const tabela = await getTabelaBrasileirao();
        res.json(tabela);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao obter dados' });
    }
});

app.get('/api/serie-a/artilharia', async (req, res) => {
    try {
        const artilharia = await getArtilharia();
        res.json(artilharia);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao obter dados da artilharia' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});