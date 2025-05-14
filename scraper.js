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

module.exports = getTabelaBrasileirao;