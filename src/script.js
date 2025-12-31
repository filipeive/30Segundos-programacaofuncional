const WORDS_DATABASE = {
    "biblia_pessoas": [
        ["Moisés", "Paulo", "Davi", "Ester", "Noé"],
        ["Abraão", "Isaque", "Jacó", "José", "Samuel"],
        ["Pedro", "João", "Tiago", "Mateus", "Lucas"],
        ["Sansão", "Dalila", "Gideão", "Rute", "Boaz"],
        ["Daniel", "Elias", "Eliseu", "Neemias", "Esdras"],
        ["Maria", "Marta", "Lázaro", "Zaqueu", "Nicodemos"],
        ["Salomão", "Saul", "Jônatas", "Absalão", "Joabe"],
        ["Débora", "Baraque", "Jael", "Gideão", "Jefté"],
        ["Estêvão", "Filipe", "Barnabé", "Silas", "Timóteo"],
        ["Adão", "Eva", "Caim", "Abel", "Sete"]
    ],
    "biblia_lugares": [
        ["Jerusalém", "Egito", "Jordão", "Belém", "Nazaré"],
        ["Galileia", "Samaria", "Judeia", "Sinai", "Carmelo"],
        ["Babilônia", "Nínive", "Damasco", "Antioquia", "Éfeso"],
        ["Mar Vermelho", "Mar da Galileia", "Rio Eufrates", "Monte das Oliveiras", "Monte Sião"],
        ["Jericó", "Sodoma", "Gomorra", "Betel", "Hebrom"],
        ["Tarso", "Corinto", "Filipos", "Tessalônica", "Roma"],
        ["Éden", "Ararate", "Ur dos Caldeus", "Harã", "Canaã"],
        ["Gólgota", "Getsemani", "Tanque de Betesda", "Tanque de Siloé", "Porta Formosa"],
        ["Cesareia", "Jope", "Lida", "Salamina", "Pafos"],
        ["Madiã", "Moabe", "Edom", "Amom", "Filístia"]
    ],
    "biblia_conceitos": [
        ["Fé", "Graça", "Salvação", "Perdão", "Amor"],
        ["Esperança", "Paz", "Alegria", "Bondade", "Misericórdia"],
        ["Justiça", "Santidade", "Redenção", "Justificação", "Santificação"],
        ["Arrependimento", "Batismo", "Comunhão", "Adoração", "Louvor"],
        ["Sabedoria", "Temor do Senhor", "Paciência", "Mansidão", "Domínio Próprio"],
        ["Aliança", "Promessa", "Profecia", "Revelação", "Inspiração"],
        ["Sacrifício", "Expiação", "Cordeiro de Deus", "Ressurreição", "Vida Eterna"],
        ["Reino de Deus", "Evangelho", "Grande Comissão", "Discipulado", "Missões"],
        ["Oração", "Jejum", "Dízimo", "Oferta", "Serviço"],
        ["Igreja", "Corpo de Cristo", "Noiva do Cordeiro", "Sacerdócio", "Unção"]
    ],
    "biblia_historias": [
        ["Dilúvio", "Êxodo", "Dez Pragas", "Muralhas de Jericó", "Davi e Golias"],
        ["Nascimento de Jesus", "Multiplicação dos Pães", "Caminhada sobre as Águas", "Ressurreição de Lázaro", "A Pesca Maravilhosa"],
        ["Parábola do Filho Pródigo", "O Bom Samaritano", "O Semeador", "A Ovelha Perdida", "As Dez Virgens"],
        ["Torre de Babel", "Sonhos de José", "A Sarça Ardente", "Travessia do Jordão", "Queda de Sansão"],
        ["Cova dos Leões", "Fornalha Ardente", "Escrita na Parede", "Jonas e o Peixe", "Reconstrução dos Muros"],
        ["Transfiguração", "Última Ceia", "Crucificação", "Ascensão", "Pentecostes"],
        ["Conversão de Paulo", "Visão de Pedro", "Viagens Missionárias", "Naufrágio de Paulo", "Cartas às Igrejas"],
        ["Criação do Mundo", "Queda do Homem", "Chamado de Abraão", "Sacrifício de Isaque", "Escada de Jacó"],
        ["Milagres de Elias", "Cura de Naamã", "Machado Flutuante", "Vale de Ossos Secos", "Visão do Templo"],
        ["Bodas de Caná", "Cura do Cego de Nascença", "Expulsão dos Mercadores", "Sermão do Monte", "Lava-pés"]
    ],
    "biblia_parabolas": [
        ["O Filho Pródigo", "O Bom Samaritano", "O Semeador", "A Ovelha Perdida", "A Dracma Perdida"],
        ["O Joio e o Trigo", "A Pérola de Grande Valor", "O Tesouro Escondido", "A Rede", "O Grão de Mostarda"],
        ["Os Talentos", "As Dez Virgens", "O Rico e Lázaro", "O Fariseu e o Publicano", "O Credor Incompassivo"],
        ["Os Trabalhadores da Vinha", "Os Lavradores Maus", "A Grande Ceia", "A Porta Estreita", "A Casa sobre a Rocha"]
    ],
    "biblia_livros": [
        ["Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio"],
        ["Josué", "Juízes", "Rute", "1 Samuel", "2 Samuel"],
        ["Salmos", "Provérbios", "Eclesiastes", "Cânticos", "Jó"],
        ["Isaías", "Jeremias", "Lamentações", "Ezequiel", "Daniel"],
        ["Mateus", "Marcos", "Lucas", "João", "Atos"],
        ["Romanos", "1 Coríntios", "2 Coríntios", "Gálatas", "Efésios"],
        ["Filipenses", "Colossenses", "1 Tessalonicenses", "2 Tessalonicenses", "Hebreus"],
        ["Tiago", "1 Pedro", "2 Pedro", "Apocalipse", "Filemom"]
    ],
    "geral": [
        ["Banana", "Computador", "Futebol", "Avião", "Cadeira"],
        ["Relógio", "Livro", "Sapato", "Janela", "Carro"],
        ["Telefone", "Garfo", "Escola", "Praia", "Música"],
        ["Cachorro", "Pizza", "Bicicleta", "Sol", "Chuva"],
        ["Óculos", "Caneta", "Montanha", "Ponte", "Espelho"],
        ["Navio", "Martelo", "Jardim", "Fogo", "Gelo"],
        ["Chave", "Porta", "Tapete", "Quadro", "Lâmpada"],
        ["Escova", "Sabonete", "Toalha", "Cama", "Travesseiro"],
        ["Prato", "Copo", "Colher", "Faca", "Panela"],
        ["Mesa", "Sofá", "Televisão", "Rádio", "Tapete"],
        ["Brasil", "Portugal", "Internet", "Cinema", "Teatro"],
        ["Avião", "Helicóptero", "Trem", "Metrô", "Ônibus"],
        ["Leão", "Elefante", "Girafa", "Zebra", "Macaco"],
        ["Maçã", "Uva", "Melancia", "Morango", "Abacaxi"],
        ["Azul", "Amarelo", "Vermelho", "Verde", "Preto"]
    ],
    "festa": [
        ["Bolo", "Balão", "Música", "Dança", "Presente"],
        ["Confete", "Salgadinho", "Doce", "Suco", "Refrigerante"],
        ["Amigo", "Família", "Risada", "Brincadeira", "Foto"],
        ["Convite", "Decoração", "Vela", "Parabéns", "Surpresa"],
        ["Palhaço", "Mágica", "Piscina", "Churrasco", "Piquenique"],
        ["Carnaval", "Natal", "Ano Novo", "Páscoa", "Aniversário"],
        ["Fantasia", "Máscara", "Brinde", "Champanhe", "Vinho"],
        ["Banda", "DJ", "Palco", "Luzes", "Som"],
        ["Pipoca", "Algodão Doce", "Sorvete", "Gelatina", "Fruta"],
        ["Jogos", "Competição", "Prêmio", "Medalha", "Troféu"]
    ],
    "famosos": [
        ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Pelé", "Maradona"],
        ["Will Smith", "Brad Pitt", "Angelina Jolie", "Tom Cruise", "Meryl Streep"],
        ["Michael Jackson", "Beyoncé", "Freddie Mercury", "Madonna", "Elvis Presley"],
        ["Bill Gates", "Elon Musk", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
        ["Albert Einstein", "Isaac Newton", "Leonardo da Vinci", "Marie Curie", "Stephen Hawking"]
    ],
    "entretenimento": [
        ["Titanic", "Avatar", "O Rei Leão", "Vingadores", "Harry Potter"],
        ["Star Wars", "Jurassic Park", "Toy Story", "Coringa", "Batman"],
        ["Netflix", "YouTube", "Instagram", "TikTok", "Spotify"],
        ["Minecraft", "Fortnite", "Super Mario", "FIFA", "GTA"],
        ["Oscar", "Grammy", "Emmy", "Cannes", "Super Bowl"]
    ],
    "lugares_mundo": [
        ["Torre Eiffel", "Estátua da Liberdade", "Cristo Redentor", "Muralha da China", "Coliseu"],
        ["Pirâmides do Egito", "Machu Picchu", "Taj Mahal", "Big Ben", "Grand Canyon"],
        ["Nova York", "Paris", "Londres", "Tóquio", "Rio de Janeiro"],
        ["Roma", "Dubai", "Veneza", "Barcelona", "Sidney"],
        ["Monte Everest", "Rio Amazonas", "Deserto do Saara", "Cataratas do Iguaçu", "Aurora Boreal"]
    ]
};

let teams = [];
let currentTeamIndex = 0;
let currentRoundWords = [];
let wordStatuses = [];
let currentWordIndex = 0;
let score = 0;
let timer = 30;
let timerInterval = null;
let currentDiceValue = 0;
let selectedCategories = [];
let currentCardSide = 'yellow';
const WINNING_SCORE = 30;

const BIBLE_VERSES = [
    "\"Quão bom e quão suave é que os irmãos vivam em união!\" – Salmo 133:1",
    "\"Tudo posso naquele que me fortalece.\" – Filipenses 4:13",
    "\"O Senhor é o meu pastor, nada me faltará.\" – Salmo 23:1",
    "\"Alegrai-vos sempre no Senhor.\" – Filipenses 4:4",
    "\"O amor nunca falha.\" – 1 Coríntios 13:8",
    "\"Lâmpada para os meus pés é tua palavra.\" – Salmo 119:105"
];

const MOTIVATIONAL_TEXTS = [
    "Bom trabalho!", "Incrível!", "Que desempenho!",
    "Próxima equipe, prepare-se!", "Mandaram bem!", "Uau! Que sintonia!"
];

// DOM Elements
const screens = document.querySelectorAll('.screen');
const btnStart = document.getElementById('btn-start');
const btnRules = document.getElementById('btn-rules');
const btnSettings = document.getElementById('btn-settings');
const btnBacks = document.querySelectorAll('.btn-back');
const btnAddTeam = document.getElementById('btn-add-team');
const teamNameInput = document.getElementById('team-name-input');
const teamsList = document.getElementById('teams-list');
const btnChooseCategories = document.getElementById('btn-choose-categories');
const catCards = document.querySelectorAll('.cat-card');
const btnBeginGame = document.getElementById('btn-begin-game');
const btnBackToTeams = document.getElementById('btn-back-to-teams');
const btnRollDice = document.getElementById('btn-roll-dice');
const btnCorrect = document.getElementById('btn-correct');
const btnSkip = document.getElementById('btn-skip');
const btnSeeScore = document.getElementById('btn-see-score');
const btnNextRound = document.getElementById('btn-next-round');
const btnFinishGame = document.getElementById('btn-finish-game');
const btnRestart = document.getElementById('btn-restart');

const timerDisplay = document.getElementById('timer');
const wordListContainer = document.getElementById('word-list-container');
const currentTeamDisplay = document.getElementById('current-team-display');
const diceTeamName = document.getElementById('dice-team-name');
const diceDisplay = document.getElementById('dice');
const boardContainer = document.getElementById('board-container');
const scoresList = document.getElementById('scores-list');
const physicalCard = document.getElementById('physical-card');
const cardSideLabel = document.getElementById('card-side-label');
const winnerText = document.getElementById('winner-text');
const finalScores = document.getElementById('final-scores');
const timesUpOverlay = document.getElementById('times-up-overlay');
const motivationalText = document.getElementById('motivational-text');
const homeVerse = document.getElementById('home-verse');
const endVerse = document.getElementById('end-verse');

// Audio
const sounds = {
    tick: document.getElementById('snd-tick'),
    correct: document.getElementById('snd-correct'),
    skip: document.getElementById('snd-skip'),
    end: document.getElementById('snd-end'),
    dice: document.getElementById('snd-dice')
};

function playSound(name) {
    if (document.getElementById('toggle-sounds').checked && sounds[name]) {
        sounds[name].currentTime = 0;
        sounds[name].play().catch(e => console.log("Audio play blocked"));
    }
}

function vibrate() {
    if (document.getElementById('toggle-vibration').checked && navigator.vibrate) {
        navigator.vibrate(50);
    }
}

// Initialize
function init() {
    updateVerse(homeVerse);
}

function updateVerse(container) {
    if (container) {
        container.innerText = BIBLE_VERSES[Math.floor(Math.random() * BIBLE_VERSES.length)];
    }
}

// Navigation
function showScreen(screenId) {
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

btnStart.onclick = () => showScreen('setup-screen');
btnRules.onclick = () => showScreen('rules-screen');
btnSettings.onclick = () => showScreen('settings-screen');
btnBacks.forEach(btn => btn.onclick = () => showScreen('home-screen'));

// Team Management
btnAddTeam.onclick = () => {
    const name = teamNameInput.value.trim();
    if (name) {
        teams.push({ name, score: 0 });
        teamNameInput.value = '';
        renderTeams();
        btnChooseCategories.disabled = teams.length < 2;
    }
};

function renderTeams() {
    teamsList.innerHTML = teams.map((t, i) => `
        <div class="team-item">
            <span>${t.name}</span>
            <button class="btn-remove" onclick="removeTeam(${i})">✕</button>
        </div>
    `).join('');
}

window.removeTeam = (index) => {
    teams.splice(index, 1);
    renderTeams();
    btnChooseCategories.disabled = teams.length < 2;
};

btnChooseCategories.onclick = () => showScreen('category-screen');
btnBackToTeams.onclick = () => showScreen('setup-screen');

// Category Selection
catCards.forEach(card => {
    card.onclick = () => {
        const cat = card.dataset.cat;
        if (cat === 'mixed') {
            selectedCategories = Object.keys(WORDS_DATABASE);
            catCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        } else {
            document.querySelector('[data-cat="mixed"]').classList.remove('selected');
            if (card.classList.contains('selected')) {
                card.classList.remove('selected');
                selectedCategories = selectedCategories.filter(c => c !== cat);
            } else {
                card.classList.add('selected');
                selectedCategories.push(cat);
            }
        }
        btnBeginGame.disabled = selectedCategories.length === 0;
    };
});

btnBeginGame.onclick = () => {
    currentTeamIndex = 0;
    prepareDiceRoll();
};

// Dice Logic
function prepareDiceRoll() {
    diceTeamName.innerText = teams[currentTeamIndex].name;
    diceDisplay.innerText = "?";
    diceDisplay.classList.remove('rolling');
    showScreen('dice-screen');
}

btnRollDice.onclick = () => {
    playSound('dice');
    diceDisplay.classList.add('rolling');
    btnRollDice.disabled = true;

    setTimeout(() => {
        const values = [0, 0, 1, 1, 2, 2];
        currentDiceValue = values[Math.floor(Math.random() * values.length)];
        diceDisplay.innerText = currentDiceValue;
        diceDisplay.classList.remove('rolling');

        setTimeout(() => {
            btnRollDice.disabled = false;
            startRound();
        }, 1000);
    }, 1000);
};

// Game Logic
function startRound() {
    score = 0;
    timer = 30;
    currentWordIndex = 0;
    wordStatuses = new Array(5).fill('pending');

    // Select side
    currentCardSide = Math.random() > 0.5 ? 'yellow' : 'blue';
    physicalCard.className = `physical-card ${currentCardSide}`;
    cardSideLabel.innerText = currentCardSide === 'yellow' ? 'Lado Amarelo' : 'Lado Azul';

    // Select words
    if (selectedCategories.length === 0) {
        selectedCategories = ['geral'];
    }
    const cat = selectedCategories[Math.floor(Math.random() * selectedCategories.length)];
    const cards = WORDS_DATABASE[cat];
    currentRoundWords = cards[Math.floor(Math.random() * cards.length)];

    // UI Update
    currentTeamDisplay.innerText = teams[currentTeamIndex].name;
    renderWordList();
    timerDisplay.innerText = timer;
    timerDisplay.style.color = "var(--success)";
    timesUpOverlay.classList.remove('active');

    showScreen('gameplay-screen');

    // Start Timer
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timer--;
        timerDisplay.innerText = timer;

        if (timer > 10) timerDisplay.style.color = "var(--success)";
        else if (timer > 5) timerDisplay.style.color = "var(--warning)";
        else {
            timerDisplay.style.color = "var(--danger)";
            playSound('tick');
        }

        if (timer <= 0) {
            endRound();
        }
    }, 1000);
}

function renderWordList() {
    wordListContainer.innerHTML = currentRoundWords.map((word, i) => `
        <div class="word-item ${i === currentWordIndex ? 'active' : ''} ${wordStatuses[i]}">
            ${word}
        </div>
    `).join('');
}

btnCorrect.onclick = () => {
    vibrate();
    playSound('correct');
    wordStatuses[currentWordIndex] = 'correct';
    score++;
    moveToNextWord();
};

btnSkip.onclick = () => {
    playSound('skip');
    wordStatuses[currentWordIndex] = 'skipped';
    moveToNextWord();
};

function moveToNextWord() {
    currentWordIndex++;
    if (currentWordIndex >= 5) {
        endRound();
    } else {
        renderWordList();
    }
}

function endRound() {
    clearInterval(timerInterval);
    playSound('end');

    const movement = Math.max(0, score - currentDiceValue);
    teams[currentTeamIndex].score += movement;

    motivationalText.innerText = MOTIVATIONAL_TEXTS[Math.floor(Math.random() * MOTIVATIONAL_TEXTS.length)];
    timesUpOverlay.classList.add('active');

    renderBoard();
}

btnSeeScore.onclick = () => {
    timesUpOverlay.classList.remove('active');
    showScoreboard();

    if (teams[currentTeamIndex].score >= WINNING_SCORE) {
        setTimeout(endGame, 1000);
    }
};

function renderBoard() {
    boardContainer.innerHTML = teams.map(t => {
        const progress = Math.min(100, (t.score / WINNING_SCORE) * 100);
        return `
            <div class="team-track">
                <div class="track-name">${t.name}</div>
                <div class="track-bar-bg">
                    <div class="track-bar-fill" style="width: ${progress}%"></div>
                </div>
            </div>
        `;
    }).join('');
}

function showScoreboard() {
    scoresList.innerHTML = teams.map((t, i) => `
        <div class="score-item ${i === currentTeamIndex ? 'active' : ''}">
            <span>${t.name}</span>
            <span class="score-val">${t.score}</span>
        </div>
    `).join('');

    showScreen('scoreboard-screen');
}

btnNextRound.onclick = () => {
    currentTeamIndex = (currentTeamIndex + 1) % teams.length;
    prepareDiceRoll();
};

btnFinishGame.onclick = endGame;

btnRestart.onclick = () => {
    teams.forEach(t => t.score = 0);
    currentTeamIndex = 0;
    updateVerse(homeVerse);
    showScreen('home-screen');
};

function endGame() {
    const winner = [...teams].sort((a, b) => b.score - a.score)[0];
    winnerText.innerText = winner.name;

    finalScores.innerHTML = teams.map(t => `
        <div class="score-item">
            <span>${t.name}</span>
            <span class="score-val">${t.score}</span>
        </div>
    `).join('');

    updateVerse(endVerse);
    showScreen('end-screen');
}

init();
