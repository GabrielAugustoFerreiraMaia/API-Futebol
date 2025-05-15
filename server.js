const express = require('express');
const {
    getTabelaBrasileirao,
    getArtilharia,
    getTabelaBrasileiraoB,
    getArtilhariaB,
    getJogosRodadaA,
    getJogosRodadaB,
} = require('./scraper');

const app = express();
const PORT = process.env.PORT || 3000;

// Rotas para Série A
app.get('/api/serie-a/tabela', async (req, res) => {
    try {
        const tabela = await getTabelaBrasileirao();
        res.json(tabela);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao obter dados da tabela da Série A' });
    }
});

app.get('/api/serie-a/artilharia', async (req, res) => {
    try {
        const artilharia = await getArtilharia();
        res.json(artilharia);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao obter dados da artilharia da Série A' });
    }
});

app.get('/api/serie-a/jogos', async (req, res) => {
    try {
        const jogos = await getJogosRodadaA();
        res.json(jogos);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao obter dados dos jogos da Série A' });
    }
});

// Rotas para Série B
app.get('/api/serie-b/tabela', async (req, res) => {
    try {
        const tabelaB = await getTabelaBrasileiraoB();
        res.json(tabelaB);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao obter dados da tabela da Série B' });
    }
});

app.get('/api/serie-b/artilharia', async (req, res) => {
    try {
        const artilhariaB = await getArtilhariaB();
        res.json(artilhariaB);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao obter dados da artilharia da Série B' });
    }
});

app.get('/api/serie-b/jogos', async (req, res) => {
    try {
        const jogosB = await getJogosRodadaB();
        res.json(jogosB);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao obter dados dos jogos da Série B' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});