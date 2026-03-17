 🦸‍♂️ Explorador de Times - Brasileirão

Um projeto interativo desenvolvido para explorar os principais times do futebol brasileiro. 
A aplicação permite realizar buscas por clubes e gerar seleções aleatórias, utilizando uma arquitetura Cliente-Servidor (Frontend e Backend).
---------------------------------------------------------------------------------------------------------

 🛠️ Estrutura do Projeto

Aqui em abaixo, a organização de pastas e arquivos conforme o ambiente de desenvolvimento:

TIMES-API/
├── backend/                # Lógica do servidor e API
│   ├── data/
│   │   ├── img/            # Banco de imagens dos times (.jpg)
│   │   └── times.json      # Banco de dados em formato JSON
│   ├── node_modules/       # Dependências do Node.js
│   ├── package.json        # Configurações e scripts do projeto
│   └── server.js           # Arquivo principal que inicia a API
├── frontend/               # Interface do usuário
│   ├── index.html          # Estrutura da página
│   ├── script.js           # Lógica de consumo da API (fetch)
│   ├── style.css           # Estilização (Layout e Cores)
│                           # Fundo da aplicação
└── .gitignore              # Arquivos ignorados pelo Git


---------------------------------------------------------------------------------------------------------

⚙️ Como Executar o Projeto

1. Preparando o Backend
Navegue até a pasta backend pelo terminal:

cd backend
npm install
node server.js
O servidor iniciará, geralmente na porta 3000 (ou conforme configurado no seu server.js). Nosso caso 4000

2. Executando o Frontend
Basta abrir o arquivo frontend/index.html no seu navegador ou utilizar a extensão Live Server do VS Code (visto que você já está usando na porta 5501).

🛠️ Funcionalidades
Seleção Aleatória: Exibe um time surpresa ao clicar no botão.

Busca Personalizada: Filtre por nome do times

Visual:Feito para ter um visual que transmite um campo de futebol



🛠️ Funcionalidades

⚽ Time Aleatório
Exibe um clube surpresa ao clicar no botão.

🔎 Busca por Times
Pesquise pelo nome do clube (ex: Flamengo, Palmeiras, Corinthians).

🏟️ Informações do Clube
Exibe nome, escudo e estádio do time.

📱 Interface Responsiva
Design moderno com tema do Brasileirão (campo, taça e cores do futebol brasileiro).


---------------------------------------------------------------------------------------------------------


 👥 Criadores

* **Eduardo De F. F. Gandra**
* **Matheus Lopes Ferreira**


