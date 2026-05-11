const WORDS_DATABASE = {
    "fundamentos": [
        ["Imutabilidade", "Pureza", "Função", "Efeito Colateral", "Estado"],
        ["Expressão", "Valor", "Declaração", "Imperativo", "Funcional"],
        ["Transparência", "Referencial", "Lógica", "Matemática", "Algoritmo"],
        ["Variável", "Constante", "Recursão", "Iteração", "Loop"]
    ],
    "haskell": [
        ["Prelude", "GHCi", "Cabal", "Stack", "Hackage"],
        ["Main", "Module", "Import", "Export", "Where"],
        ["Let", "In", "Case", "Of", "If-Then-Else"],
        ["Guarda", "Pattern", "Matching", "Binding", "Syntax"]
    ],
    "tipos": [
        ["Int", "Integer", "Float", "Double", "Char"],
        ["String", "Bool", "List", "Tuple", "Maybe"],
        ["Either", "Nothing", "Just", "Left", "Right"],
        ["Typeclass", "Eq", "Show", "Ord", "Num"]
    ],
    "listas_hof": [
        ["Head", "Tail", "Map", "Filter", "Fold"],
        ["Zip", "Length", "Reverse", "Concat", "Elem"],
        ["Lambda", "Currying", "Partial", "Apply", "Composition"],
        ["Take", "Drop", "SplitAt", "Span", "Break"]
    ],
    "avancado": [
        ["Monad", "Functor", "Applicative", "Lazy", "Evaluation"],
        ["Infinite", "List", "Thunk", "Strictness", "Profiling"],
        ["IO", "Action", "Pure", "Unsafe", "Perform"],
        ["Type", "Inference", "Kind", "Polymorphism", "Generic"]
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
    "\"A computação não trata apenas de computadores, mas de resolver problemas.\" – Grace Hopper",
    "\"Programar é a arte de organizar a complexidade.\" – Edsger Dijkstra",
    "\"Os programas devem ser escritos para as pessoas lerem e apenas incidentalmente para as máquinas executarem.\" – Harold Abelson",
    "\"O design de software é uma luta constante contra a entropia.\" – Desconhecido",
    "\"Recursão é a alma da programação funcional.\"",
    "\"Haskell: onde as funções são cidadãs de primeira classe.\""
];

const MOTIVATIONAL_TEXTS = [
    "Código limpo!", "Lógica impecável!", "Que performance!",
    "Compilação com sucesso!", "Sintaxe perfeita!", "Excelente abstração!"
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
const btnFullscreen = document.getElementById('btn-fullscreen');

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

// Full Screen Toggle
btnFullscreen.onclick = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message}`);
        });
        btnFullscreen.innerText = "Sair";
    } else {
        document.exitFullscreen();
        btnFullscreen.innerText = "Ativar";
    }
};

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
