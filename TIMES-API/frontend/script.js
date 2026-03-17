// Lista de times com informações completas
const times = [
    { nome: "Flamengo", foto: "https://logodetimes.com/times/flamengo/logo-flamengo-256.png", estadio: "Maracanã", fundacao: 1895, regiao: "Sudeste" },
    { nome: "Palmeiras", foto: "https://logodetimes.com/times/palmeiras/logo-palmeiras-256.png", estadio: "Allianz Parque", fundacao: 1914, regiao: "Sudeste" },
    { nome: "Corinthians", foto: "https://logodetimes.com/times/corinthians/logo-corinthians-256.png", estadio: "Neo Química Arena", fundacao: 1910, regiao: "Sudeste" },
    { nome: "São Paulo", foto: "https://logodetimes.com/times/sao-paulo/logo-sao-paulo-256.png", estadio: "Morumbi", fundacao: 1930, regiao: "Sudeste" },
    { nome: "Grêmio", foto: "https://logodetimes.com/times/gremio/logo-gremio-256.png", estadio: "Arena do Grêmio", fundacao: 1903, regiao: "Sul" },
    { nome: "Atlético-MG", foto: "https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-256.png", estadio: "Arena MRV", fundacao: 1908, regiao: "Sudeste" },
    { nome: "Fluminense", foto: "https://logodetimes.com/times/fluminense/logo-fluminense-256.png", estadio: "Maracanã", fundacao: 1902, regiao: "Sudeste" },
    { nome: "Botafogo", foto: "https://logodetimes.com/times/botafogo/logo-botafogo-256.png", estadio: "Nilton Santos", fundacao: 1904, regiao: "Sudeste" },
    { nome: "Internacional", foto: "https://logodetimes.com/times/internacional/logo-internacional-256.png", estadio: "Beira-Rio", fundacao: 1909, regiao: "Sul" },
    { nome: "Cruzeiro", foto: "https://logodetimes.com/times/cruzeiro/logo-cruzeiro-256.png", estadio: "Mineirão", fundacao: 1921, regiao: "Sudeste" },
    { nome: "Santos", foto: "https://logodetimes.com/times/santos/logo-santos-256.png", estadio: "Vila Belmiro", fundacao: 1912, regiao: "Sudeste" },
    { nome: "Bahia", foto: "https://logodetimes.com/times/santos/logo-santos-256.png", estadio: "Arena Fonte Nova", fundacao: 1931, regiao: "Nordeste" },
    { nome: "Fortaleza", foto: "https://logodetimes.com/times/fortaleza/logo-fortaleza-256.png", estadio: "Arena Castelão", fundacao: 1918, regiao: "Nordeste" },
    { nome: "Ceará", foto: "https://logodetimes.com/times/ceara/logo-ceara-256.png", estadio: "Arena Castelão", fundacao: 1914, regiao: "Nordeste" }
];

// Elementos
const timeImage = document.getElementById("time-image");
const timeName = document.getElementById("timeName");
const infoEstadio = document.getElementById("infoEstadio");
const infoFundacao = document.getElementById("infoFundacao");
const infoRegiao = document.getElementById("infoRegiao");

const randomBtn = document.getElementById("randomBtn");
const searchBtn = document.getElementById("searchBtn");
const timeInput = document.getElementById("timeInput");

// Mostrar time
function showTime(time) {
    timeImage.src = time.foto;
    timeName.textContent = time.nome;

    infoEstadio.textContent = "🏟️ Estádio: " + time.estadio;
    infoFundacao.textContent = "📅 Fundação: " + time.fundacao;
    infoRegiao.textContent = "📍 Região: " + time.regiao;
}

// Aleatório
function fetchRandomTime() {
    const index = Math.floor(Math.random() * times.length);
    showTime(times[index]);
}

// Busca
function searchTimeByName() {
    const query = timeInput.value.toLowerCase().trim();

    const found = times.find(t => t.nome.toLowerCase() === query);

    if (found) {
        showTime(found);
    } else {
        timeName.textContent = "Time não encontrado ❌";
        timeImage.src = "";
        infoEstadio.textContent = "";
        infoFundacao.textContent = "";
        infoRegiao.textContent = "";
    }
}

// Eventos
randomBtn.addEventListener("click", fetchRandomTime);
searchBtn.addEventListener("click", searchTimeByName);

document.addEventListener("DOMContentLoaded", fetchRandomTime);