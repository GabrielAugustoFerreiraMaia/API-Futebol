const puppeteer = require('puppeteer');

async function getTabelaBrasileirao() {
    const url = 'https://ge.globo.com/futebol/brasileirao-serie-a/';
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    // Aguarda a tabela ser carregada
    await page.waitForSelector('.tabela__equipes.tabela__equipes--com-borda');

    const data = await page.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('.tabela__equipes.tabela__equipes--com-borda tbody tr'));
        return rows.map(row => {
            const cols = row.querySelectorAll('td');
            return {
                posicao: cols[0]?.innerText || null,
                time: cols[1]?.innerText || null,
                pontos: cols[2]?.innerText || null,
                jogos: cols[3]?.innerText || null,
                vitorias: cols[4]?.innerText || null,
                empates: cols[5]?.innerText || null,
                derrotas: cols[6]?.innerText || null,
                golsPro: cols[7]?.innerText || null,
                golsContra: cols[8]?.innerText || null,
                saldo: cols[9]?.innerText || null,
                ultimosJogos: cols[10]?.innerText || null,
            };
        });
    });

    await browser.close();
    return data;
}

module.exports = getTabelaBrasileirao;