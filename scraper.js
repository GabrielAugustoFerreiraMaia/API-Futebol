const puppeteer = require('puppeteer');

async function getTabelaBrasileirao() {
    const url = 'https://ge.globo.com/futebol/brasileirao-serie-a/';
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Captura os nomes dos times e suas posições
        const times = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.tabela__equipes tbody tr')).map(row => {
                const cols = row.querySelectorAll('td');
                return {
                    posicao: cols[0]?.innerText.trim(),
                    time: cols[1]?.innerText.trim(),
                };
            });
        });

        // Captura as estatísticas
        const estatisticas = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.tabela__pontos tbody tr')).map(row => {
                const cols = row.querySelectorAll('td');
                return {
                    pontos: cols[0]?.innerText.trim(),
                    jogos: cols[1]?.innerText.trim(),
                    vitorias: cols[2]?.innerText.trim(),
                    empates: cols[3]?.innerText.trim(),
                    derrotas: cols[4]?.innerText.trim(),
                    golsPro: cols[5]?.innerText.trim(),
                    golsContra: cols[6]?.innerText.trim(),
                    saldoGols: cols[7]?.innerText.trim(),
                };
            });
        });

        // Combina os dados de times e estatísticas
        const data = times.map((time, index) => ({
            ...time,
            ...estatisticas[index],
        }));

        await browser.close();
        return data;
    } catch (error) {
        console.error('Erro ao obter dados:', error);
        await browser.close();
        return { error: 'Erro ao obter dados' };
    }
}

async function getArtilharia() {
    const url = 'https://ge.globo.com/futebol/brasileirao-serie-a/';
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Captura a artilharia
        const artilharia = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.ranking-item-wrapper')).map(item => {
                const jogadorFoto = item.querySelector('.jogador-foto img')?.src;
                const jogadorEscudo = item.querySelector('.jogador-escudo img')?.src;
                const jogadorNome = item.querySelector('.jogador-nome')?.innerText.trim();
                const jogadorPosicao = item.querySelector('.jogador-posicao')?.innerText.trim();
                const jogadorGols = item.querySelector('.jogador-gols')?.innerText.trim();

                return {
                    foto: jogadorFoto,
                    escudo: jogadorEscudo,
                    nome: jogadorNome,
                    posicao: jogadorPosicao,
                    gols: jogadorGols,
                };
            });
        });

        await browser.close();
        return artilharia;
    } catch (error) {
        console.error('Erro ao obter dados da artilharia:', error);
        await browser.close();
        return { error: 'Erro ao obter dados da artilharia' };
    }
}

// Funções para Série B
async function getTabelaBrasileiraoB() {
    const url = 'https://ge.globo.com/futebol/brasileirao-serie-b/';
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Captura os nomes dos times e suas posições
        const times = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.tabela__equipes tbody tr')).map(row => {
                const cols = row.querySelectorAll('td');
                return {
                    posicao: cols[0]?.innerText.trim(),
                    time: cols[1]?.innerText.trim(),
                };
            });
        });

        // Captura as estatísticas
        const estatisticas = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.tabela__pontos tbody tr')).map(row => {
                const cols = row.querySelectorAll('td');
                return {
                    pontos: cols[0]?.innerText.trim(),
                    jogos: cols[1]?.innerText.trim(),
                    vitorias: cols[2]?.innerText.trim(),
                    empates: cols[3]?.innerText.trim(),
                    derrotas: cols[4]?.innerText.trim(),
                    golsPro: cols[5]?.innerText.trim(),
                    golsContra: cols[6]?.innerText.trim(),
                    saldoGols: cols[7]?.innerText.trim(),
                };
            });
        });

        // Combina os dados de times e estatísticas
        const data = times.map((time, index) => ({
            ...time,
            ...estatisticas[index],
        }));

        await browser.close();
        return data;
    } catch (error) {
        console.error('Erro ao obter dados da Série B:', error);
        await browser.close();
        return { error: 'Erro ao obter dados da Série B' };
    }
}

async function getArtilhariaB() {
    const url = 'https://ge.globo.com/futebol/brasileirao-serie-b/';
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Captura a artilharia
        const artilharia = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.ranking-item-wrapper')).map(item => {
                const jogadorFoto = item.querySelector('.jogador-foto img')?.src;
                const jogadorEscudo = item.querySelector('.jogador-escudo img')?.src;
                const jogadorNome = item.querySelector('.jogador-nome')?.innerText.trim();
                const jogadorPosicao = item.querySelector('.jogador-posicao')?.innerText.trim();
                const jogadorGols = item.querySelector('.jogador-gols')?.innerText.trim();

                return {
                    foto: jogadorFoto,
                    escudo: jogadorEscudo,
                    nome: jogadorNome,
                    posicao: jogadorPosicao,
                    gols: jogadorGols,
                };
            });
        });

        await browser.close();
        return artilharia;
    } catch (error) {
        console.error('Erro ao obter dados da artilharia da Série B:', error);
        await browser.close();
        return { error: 'Erro ao obter dados da artilharia da Série B' };
    }
}

// Funções para capturar os jogos da rodada
async function getJogosRodadaA() {
    const url = 'https://ge.globo.com/futebol/brasileirao-serie-a/';
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Captura os jogos da rodada
        const jogos = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.lista-jogos__jogo')).map(item => {
                const timeMandante = item.querySelector('.placar__equipes--mandante .equipes__nome')?.innerText.trim();
                const timeVisitante = item.querySelector('.placar__equipes--visitante .equipes__nome')?.innerText.trim();
                
                // Tenta capturar o placar, se não existir, usa 'N/A'
                const placarMandante = item.querySelector('.placar-box__valor--mandante')?.innerText.trim() || 'N/A';
                const placarVisitante = item.querySelector('.placar-box__valor--visitante')?.innerText.trim() || 'N/A';

                const local = item.querySelector('.jogo__informacoes--local')?.innerText.trim();
                const dataJogo = item.querySelector('.jogo__informacoes--data')?.innerText.trim();
                const horaJogo = item.querySelector('.jogo__informacoes--hora')?.innerText.trim();

                return {
                    timeMandante,
                    timeVisitante,
                    placarMandante,
                    placarVisitante,
                    local,
                    dataJogo,
                    horaJogo,
                };
            });
        });

        console.log('Jogos encontrados:', jogos); // Log para depuração
        await browser.close();
        return jogos;
    } catch (error) {
        console.error('Erro ao obter dados dos jogos da Série A:', error);
        await browser.close();
        return { error: 'Erro ao obter dados dos jogos da Série A' };
    }
}

async function getJogosRodadaB() {
    const url = 'https://ge.globo.com/futebol/brasileirao-serie-b/';
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Captura os jogos da rodada
        const jogos = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.lista-jogos__jogo')).map(item => {
                const timeMandante = item.querySelector('.placar__equipes--mandante .equipes__nome')?.innerText.trim();
                const timeVisitante = item.querySelector('.placar__equipes--visitante .equipes__nome')?.innerText.trim();
                
                // Tenta capturar o placar, se não existir, usa 'N/A'
                const placarMandante = item.querySelector('.placar-box__valor--mandante')?.innerText.trim() || 'N/A';
                const placarVisitante = item.querySelector('.placar-box__valor--visitante')?.innerText.trim() || 'N/A';

                const local = item.querySelector('.jogo__informacoes--local')?.innerText.trim();
                const dataJogo = item.querySelector('.jogo__informacoes--data')?.innerText.trim();
                const horaJogo = item.querySelector('.jogo__informacoes--hora')?.innerText.trim();

                return {
                    timeMandante,
                    timeVisitante,
                    placarMandante,
                    placarVisitante,
                    local,
                    dataJogo,
                    horaJogo,
                };
            });
        });

        console.log('Jogos encontrados:', jogos); // Log para depuração
        await browser.close();
        return jogos;
    } catch (error) {
        console.error('Erro ao obter dados dos jogos da Série A:', error);
        await browser.close();
        return { error: 'Erro ao obter dados dos jogos da Série A' };
    }
}

module.exports = {
    getTabelaBrasileirao,
    getArtilharia,
    getTabelaBrasileiraoB,
    getArtilhariaB,
    getJogosRodadaA,
    getJogosRodadaB,
};