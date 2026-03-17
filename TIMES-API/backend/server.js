const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

// Importar JSON de times
const times = require("./data/times.json");

// Criar app
const app = express();
const PORT = 4000;

// Habilitar CORS
app.use(cors());

// ================================
// SERVIR IMAGENS
// ================================
app.use(
    "/img",
    express.static(path.join(__dirname, "data/img"))
);

// ================================
// FUNÇÃO AUXILIAR
// ================================
function sortear(array){
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

// ================================
// ROTA 1 - TIME ALEATÓRIO
// ================================
app.get("/api/times/aleatorio", (req, res) => {
    const todosOsTimes = Object.values(times);
    const item = sortear(todosOsTimes);

    const nome = item.nome;
    const estadio = item.estadio;
    const foto = item.foto[0];

    res.json({
        status: "sucess",
        message: `Nome: ${nome}, Estádio: ${estadio}`,
        foto: `http://localhost:${PORT}/img/${foto}`
    });
});

// ================================
// ROTA 2 - TIME POR NOME
// ================================
app.get("/api/times/:pesquisa", (req, res) => {
    const pesquisa = req.params.pesquisa.toLowerCase();
    const time = times[pesquisa];

    if (!time){
        return res.status(404).json({
            status: "error",
            message: `Time "${pesquisa}" não encontrado`
        });
    }

    const nome = time.nome;
    const estadio = time.estadio;
    const foto = time.foto[0];

    res.json({
        status: "sucess",
        message: `Nome: ${nome}, Estádio: ${estadio}`,
        foto: `http://localhost:${PORT}/img/${foto}`
    });
});

// ================================
// INICIAR SERVIDOR
// ================================
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📂 Coloque as imagens em: data/img/`);
});