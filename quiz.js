// quiz.js
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const timerEl = document.getElementById('timer');
const progressBar = document.getElementById('progressBar');
const loader = document.getElementById('loader');
const quizContainer = document.getElementById('quizContainer');

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let blinkInterval = null;
let questions = [];
let answersData = [];
let userAnswers = [];

const category = localStorage.getItem('quizCategory') || '18';
const difficulty = localStorage.getItem('quizDifficulty') || 'easy';

async function fetchQuestions() {
    try {
        loader.style.display = "flex";
        quizContainer.style.opacity = "0";

        const apiUrl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        questions = data.results.slice(0, 10).map(q => ({
            question: q.question,
            options: shuffleArray([...q.incorrect_answers, q.correct_answer]),
            answer: q.correct_answer
        }));

        localStorage.setItem('quizQuestions', JSON.stringify(questions));

        setTimeout(() => {
            loader.style.display = "none";
            quizContainer.style.display = "block";
            quizContainer.style.opacity = "1";
            quizContainer.style.transform = "scale(1)";
            startQuiz();
        }, 800);
    } catch (error) {
        console.error("Error fetching questions:", error);
        questionEl.textContent = "Failed to load questions. Please try again.";
    }
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answersData = [];
    userAnswers = new Array(10).fill("Not Attempted");
    nextBtn.style.transform = "scale(0)";
    nextBtn.style.transition = "transform 0.3s ease-out";
    loadQuestion();
}

function loadQuestion() {
    clearInterval(blinkInterval);
    timeLeft = 15;
    timerEl.textContent = timeLeft;
    timerEl.style.color = "white";

    progressBar.style.transition = "width 0.5s ease-in-out";
    progressBar.style.width = `${((currentQuestionIndex + 1) / 10) * 100}%`;

    nextBtn.style.transform = "scale(0)";
    nextBtn.disabled = true;

    const currentQuestion = questions[currentQuestionIndex];

    quizContainer.style.opacity = "0";
    quizContainer.style.transform = "scale(0.95)";
    quizContainer.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    
    setTimeout(() => {
        questionEl.innerHTML = currentQuestion.question;
        optionsEl.innerHTML = '';

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'text-2xl block w-full text-white font-bold text-left px-4 py-2 rounded-[20px] hover:bg-gray-800';
            button.onclick = () => selectAnswer(button, option, currentQuestion.answer);
            optionsEl.appendChild(button);
        });

        quizContainer.style.opacity = "1";
        quizContainer.style.transform = "scale(1)";
        startTimer();
    }, 300);
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft === 5) timerEl.style.color = "red";
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleUnanswered();
        }
    }, 1000);
}

function selectAnswer(button, selectedAnswer, correctAnswer) {
    clearInterval(blinkInterval);
    const isCorrect = selectedAnswer === correctAnswer;
    userAnswers[currentQuestionIndex] = selectedAnswer;
    answersData.push({
        question: questions[currentQuestionIndex].question,
        correctAnswer: correctAnswer,
        selectedAnswer: selectedAnswer,
        isCorrect: isCorrect
    });

    if (isCorrect) {
        button.classList.add('bg-green-600', 'text-white');
        score++;
    } else {
        button.classList.add('bg-red-600', 'text-white');
        startBlinkingCorrectAnswer(correctAnswer);
    }

    document.querySelectorAll('#options button').forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-gray-800');
    });

    nextBtn.disabled = false;
    nextBtn.style.transform = "scale(1)";
}

function startBlinkingCorrectAnswer(correctAnswer) {
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(btn => {
        if (btn.textContent === correctAnswer) {
            let isGreen = false;
            blinkInterval = setInterval(() => {
                isGreen = !isGreen;
                btn.classList.toggle('bg-green-600', isGreen);
            }, 400);
        }
    });
}

function handleUnanswered() {
    userAnswers[currentQuestionIndex] = "Not Attempted";
    answersData.push({
        question: questions[currentQuestionIndex].question,
        correctAnswer: questions[currentQuestionIndex].answer,
        selectedAnswer: "Not Attempted",
        isCorrect: false
    });

    document.querySelectorAll('#options button').forEach(btn => btn.disabled = true);
    nextBtn.disabled = false;
    nextBtn.style.transform = "scale(1)";
    nextQuestion();
}

function nextQuestion() {
    clearInterval(blinkInterval);
    clearInterval(timer);
    currentQuestionIndex++;

    if (currentQuestionIndex < 10) {
        loadQuestion();
    } else {
        quizContainer.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        quizContainer.style.opacity = "0";
        quizContainer.style.transform = "scale(0.8)";
        setTimeout(() => {
            localStorage.setItem('quizScore', score);
            localStorage.setItem('quizAnswers', JSON.stringify(answersData.slice(0, 10)));
            location.href = 'result.html';
        }, 500);
    }
}

nextBtn.addEventListener('click', nextQuestion);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

fetchQuestions();