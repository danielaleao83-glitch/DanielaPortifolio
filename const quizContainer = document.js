const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const timerEl = document.getElementById('timer');
const scoreContainer = document.getElementById('score');
const finalScoreEl = document.getElementById('final-score');

const quizData = [
    { question: "Qual a capital do Brasil?", options: ["Rio", "São Paulo", "Brasília", "Salvador"], answer: "Brasília" },
    { question: "Qual a cor do céu?", options: ["Azul", "Verde", "Vermelho", "Amarelo"], answer: "Azul" },
    { question: "Qual linguagem é usada no navegador?", options: ["Python", "JavaScript", "C#", "Java"], answer: "JavaScript" },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;

function startQuiz() {
    showQuestion();
    startTimer();
}

function showQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    quizContainer.innerHTML = "";

    q.options.forEach(option => {
        const div = document.createElement('div');
        div.classList.add('option');
        div.textContent = option;
        div.addEventListener('click', selectOption);
        quizContainer.appendChild(div);
    });

    // Reset timer
    timeLeft = 15;
    timerEl.textContent = timeLeft;
}

function selectOption(e) {
    clearInterval(timer); // parar o timer da pergunta
    const selected = e.target;
    const q = quizData[currentQuestion];

    // Destacar seleção
    quizContainer.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    selected.classList.add('selected');

    // Contar pontuação
    if(selected.textContent === q.answer) score++;

    // Ir para próxima pergunta depois de 1s
    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    currentQuestion++;
    if(currentQuestion < quizData.length) {
        showQuestion();
        startTimer();
    } else {
        showScore();
    }
}

function startTimer() {
    timerEl.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if(timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function showScore() {
    quizContainer.style.display = "none";
    questionEl.style.display = "none";
    timerEl.parentElement.style.display = "none";
    scoreContainer.style.display = "block";
    finalScoreEl.textContent = score + " / " + quizData.length;
}

// Inicia o quiz
startQuiz();
