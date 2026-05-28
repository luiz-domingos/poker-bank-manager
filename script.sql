-- =========================================
-- BANCO DE DADOS
-- =========================================

CREATE DATABASE IF NOT EXISTS poker_bank_manager;

USE poker_bank_manager;

-- =========================================
-- TABELA DE SESSÕES
-- =========================================

CREATE TABLE IF NOT EXISTS sessions (

```
id INT AUTO_INCREMENT PRIMARY KEY,

session_date DATE NOT NULL,

room VARCHAR(100) NOT NULL,

game_type VARCHAR(100) NOT NULL,

stake VARCHAR(50) NOT NULL,

buy_in DECIMAL(10,2) NOT NULL,

cash_out DECIMAL(10,2) NOT NULL,

profit DECIMAL(10,2) NOT NULL,

notes TEXT
```

);

-- =========================================
-- DADOS EXEMPLO
-- =========================================

INSERT INTO sessions
(
session_date,
room,
game_type,
stake,
buy_in,
cash_out,
profit,
notes
)
VALUES
(
'2026-05-28',
'PokerStars',
'Cash Game',
'NL10',
100.00,
180.00,
80.00,
'Sessão positiva'
),

(
'2026-05-29',
'GG Poker',
'MTT',
'$5',
50.00,
20.00,
-30.00,
'Bad beats na reta final'
);
