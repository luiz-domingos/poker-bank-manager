# Poker Bank Manager

Sistema web completo para gerenciamento de banca de poker.

Projeto desenvolvido para a disciplina de Programação II - Web da UEMG.

---

# Objetivo do Projeto

O sistema foi desenvolvido com o objetivo de auxiliar jogadores de poker no controle de bankroll e gerenciamento de sessões.

A aplicação permite cadastrar, visualizar, editar e remover sessões de poker, além de exibir estatísticas importantes como lucro total e bankroll atual.

---

# Tecnologias Utilizadas

## Front-end
- HTML5
- CSS3
- Bootstrap 5
- JavaScript

## Back-end
- Node.js
- Express

## Banco de Dados
- MySQL

---

# Funcionalidades

## CRUD Completo de Sessões

O sistema possui:

- Cadastro de sessões
- Listagem de sessões
- Busca de sessão por ID
- Edição de sessões
- Exclusão de sessões

---

# Dashboard

O sistema também apresenta:

- Total de sessões
- Lucro total
- Bankroll atual
- Cálculo automático de lucro

---

# Estrutura do Projeto

```txt
poker-bank-manager/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── package.json
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       └── server.js
│
├── database/
│
└── README.md
```

---

# Como Executar o Projeto

## 1. Clonar o Repositório

```bash
git clone URL_DO_REPOSITORIO
```

---

## 2. Entrar na Pasta do Backend

```bash
cd backend
```

---

## 3. Instalar Dependências

```bash
npm install
```

---

## 4. Configurar Banco de Dados

Criar banco:

```sql
CREATE DATABASE poker_manager;
```

Selecionar banco:

```sql
USE poker_manager;
```

Criar tabela:

```sql
CREATE TABLE sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    room VARCHAR(100) NOT NULL,
    game_type VARCHAR(100) NOT NULL,
    stake VARCHAR(50) NOT NULL,
    buy_in DECIMAL(10,2) NOT NULL,
    cash_out DECIMAL(10,2) NOT NULL,
    profit DECIMAL(10,2) NOT NULL,
    notes TEXT
);
```

---

## 5. Executar Backend

Entrar na pasta backend:

```bash
cd backend
```

Executar servidor:

```bash
npm start
```

Servidor disponível em:

```txt
http://localhost:3000
```

---

## 6. Executar Frontend

Abrir o arquivo:

```txt
frontend/index.html
```

---

# Endpoints da API

| Método | Endpoint | Descrição |
|---|---|---|
| GET | /sessions | Lista todas as sessões |
| GET | /sessions/:id | Busca sessão por ID |
| POST | /sessions | Cadastra sessão |
| PUT | /sessions/:id | Atualiza sessão |
| DELETE | /sessions/:id | Remove sessão |

---

# Exemplo de JSON

```json
{
  "date": "2026-05-27",
  "room": "PokerStars",
  "game_type": "Cash Game",
  "stake": "NL10",
  "buy_in": 100,
  "cash_out": 150,
  "profit": 50,
  "notes": "Sessão positiva"
}
```

---

# Autor

Projeto desenvolvido por Luiz Gustavo para a disciplina de Programação II - Web.