# ♠ Poker Bank Manager

Sistema web desenvolvido para gerenciamento de sessões de poker, bankroll e resultados financeiros.

---

# 📌 Sobre o Projeto

O Poker Bank Manager é uma aplicação web desenvolvida utilizando:

* Front-end com HTML, CSS e JavaScript;
* Back-end com Node.js e Express;
* Banco de dados MySQL;
* API REST para comunicação entre cliente e servidor.

O sistema permite registrar, visualizar, editar e excluir sessões de poker, além de possuir autenticação simples de usuários e dashboard com estatísticas.

---

# 🚀 Funcionalidades

## ✅ Autenticação

* Login de usuário
* Cadastro de usuário
* Proteção de acesso

## ✅ Sessões de Poker

* Cadastro de sessões
* Listagem de sessões
* Edição de sessões
* Exclusão de sessões

## ✅ Dashboard

* Total de sessões
* Lucro total
* Melhor sessão

## ✅ Recursos Extras

* Cálculo automático de lucro
* Interface responsiva
* Tema dark moderno
* Dashboard estilo poker/cassino

---

# 🛠 Tecnologias Utilizadas

## Front-end

* HTML5
* CSS3
* JavaScript
* Bootstrap 5

## Back-end

* Node.js
* Express.js

## Banco de Dados

* MySQL

## Versionamento

* Git
* GitHub

---

# 📂 Estrutura do Projeto

```bash
poker-bank-manager/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── script.js
│   ├── login.js
│   ├── register.js
│   └── style.css
│
└── README.md
```

---

# ⚙️ Como Executar o Projeto

## 1️⃣ Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/poker-bank-manager.git
```

---

## 2️⃣ Instalar dependências

Acesse a pasta backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

---

## 3️⃣ Configurar banco MySQL

Crie o banco:

```sql
CREATE DATABASE poker_bank_manager;
```

---

## 4️⃣ Criar tabela

```sql
CREATE TABLE sessions (

    id INT AUTO_INCREMENT PRIMARY KEY,

    session_date DATE,

    room VARCHAR(100),

    game_type VARCHAR(100),

    stake VARCHAR(50),

    buy_in DECIMAL(10,2),

    cash_out DECIMAL(10,2),

    profit DECIMAL(10,2),

    notes TEXT
);
```

---

## 5️⃣ Configurar conexão MySQL

Arquivo:

```bash
backend/src/config/db.js
```

Configure:

* usuário
* senha
* banco

---

## 6️⃣ Executar servidor

Na pasta backend:

```bash
node src/server.js
```

Servidor:

```bash
http://localhost:3000
```

---

## 7️⃣ Executar frontend

Abra:

```bash
frontend/login.html
```

---

# 📡 Endpoints da API

## Sessões

| Método | Endpoint      | Descrição       |
| ------ | ------------- | --------------- |
| GET    | /sessions     | Lista sessões   |
| GET    | /sessions/:id | Busca sessão    |
| POST   | /sessions     | Cria sessão     |
| PUT    | /sessions/:id | Atualiza sessão |
| DELETE | /sessions/:id | Remove sessão   |

---

# 📸 Interface

O sistema possui:

* dashboard moderno;
* cards estatísticos;
* tabela dinâmica;
* autenticação;
* responsividade;
* tema dark.

---

# 👨‍💻 Autor

Projeto desenvolvido para atividade acadêmica de Desenvolvimento Web Full Stack.

Desenvolvido por Luiz Gustavo.
