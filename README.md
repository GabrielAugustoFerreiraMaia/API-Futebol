# 📊 API Brasileirão com Puppeteer

Este projeto é uma API criada com **Node.js**, **Express** e **Puppeteer** que realiza _web scraping_ no site [ge.globo.com](https://ge.globo.com) para extrair informações atualizadas do **Campeonato Brasileiro Série A e B**, incluindo:

- 🏆 Tabela de classificação (Série A e B)
- ⚽ Artilharia (Série A e B)
- 📅 Jogos da rodada (Série A e B)

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Puppeteer](https://pptr.dev/)

---

## 📁 Estrutura do Projeto

```
├── scraper.js          # Arquivo com todas as funções de scraping
├── server.js           # Servidor Express que expõe a API
├── package.json
└── README.md
```

---

## 📌 Endpoints Disponíveis

### 🔹 Série A

- `GET /tabela-a` → Retorna a tabela de classificação da Série A
- `GET /artilharia-a` → Retorna os artilheiros da Série A
- `GET /jogos-a` → Retorna os jogos da rodada da Série A

### 🔹 Série B

- `GET /tabela-b` → Retorna a tabela de classificação da Série B
- `GET /artilharia-b` → Retorna os artilheiros da Série B
- `GET /jogos-b` → Retorna os jogos da rodada da Série B

---

## ▶️ Como Executar

### 1. Clone o projeto
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie o servidor
```bash
node server.js
```

> A API estará disponível em: `http://localhost:3000`

---

## 📄 Exemplo de Resposta: `/tabela-a`

```json
[
  {
    "posicao": "1",
    "time": "Flamengo",
    "pontos": "30",
    "jogos": "15",
    "vitorias": "9",
    "empates": "3",
    "derrotas": "3",
    "golsPro": "25",
    "golsContra": "12",
    "saldoGols": "13"
  }
]
```

---

## ⚠️ Avisos

- Como o scraping depende da estrutura do site, **mudanças no layout do [ge.globo.com](https://ge.globo.com)** podem quebrar a aplicação.
- Use com responsabilidade e evite sobrecarregar os servidores do site alvo.

---

## 📬 Contato

Desenvolvido por **Gabriel Augusto**  
[LinkedIn](https://www.linkedin.com/in/gabrielaugustoferreiramaia/) • gabrielaugusto.dev@gmail.com

---

## 🏁 Licença

Este projeto está sob a licença MIT.
