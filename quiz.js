import questions from './questions.js';

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const timerEl = document.getElementById('timer');
const progressBar = document.getElementById('progressBar');

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let selectedQuestions = [];

function startQuiz() {
    selectedQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 15;
    timerEl.textContent = timeLeft;
    timerEl.style.color = "#cbd5e1";
    progressBar.style.width = `${(currentQuestionIndex / selectedQuestions.length) * 100}%`;
    progressBar.style.transition = "width 0.6s ease-in-out";
    
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = '';
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'text-2xl block w-full text-white font-bold text-left px-4 py-2 rounded-[20px]  hover:bg-gray-800';
        button.onclick = () => selectAnswer(button, option === currentQuestion.answer);
        optionsEl.appendChild(button);
    });
    
    startTimer();
    nextBtn.disabled = true;
}

// function startTimer() {
//     timer = setInterval(() => {
//         timeLeft--;
//         timerEl.textContent = timeLeft;
//         if (timeLeft <= 5) {
//             timerEl.style.color = "red";
//             timerEl.style.transition = "color 0.8s ease-in-out";
//         }
//         if (timeLeft <= 0) {
//             clearInterval(timer);
//             nextQuestion();
//         }
//     }, 1000);
// }

function selectAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add('bg-green-600', 'text-white');
        score++;    
    } else {
        button.classList.add('bg-red-600', 'text-white');
    }
    document.querySelectorAll('#options button').forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-gray-800');
    });

    nextBtn.disabled = false;
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion();
    } else {
        localStorage.setItem('quizScore', score);
        location.href = 'result.html';
    }
}

nextBtn.addEventListener('click', nextQuestion);
startQuiz();
