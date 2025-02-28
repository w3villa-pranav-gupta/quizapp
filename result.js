document.addEventListener('DOMContentLoaded', () => {
    const resultContainer = document.getElementById('resultContainer');
    
    // Animate the container from inside (scale 0.8) to outside (scale 1)
    setTimeout(() => {
        resultContainer.style.opacity = "1";
        resultContainer.style.transform = "scale(1)";
    }, 50); // Small delay to ensure the transition applies

    let score = localStorage.getItem('quizScore') || 0;
    score = Number(score);
    const totalQuestions = 10;
    const scoreText = document.getElementById('scoreText');
    const ctx = document.getElementById('scoreChart').getContext('2d');
    const messageEl = document.createElement('p');
    messageEl.className = "text-center mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold";

    if (score < 5) {
        messageEl.textContent = "😢 Better Luck Next Time!";
        messageEl.classList.add("text-red-600");
    } else if (score >= 7) {
        messageEl.textContent = "🎉 You Nailed It! 🧠";
        messageEl.classList.add("text-green-500");
    } else {
        messageEl.textContent = "👍 Not bad!";
        messageEl.classList.add("text-purple-600");
    }

    scoreText.textContent = `Your Score: ${score} / ${totalQuestions}`;
    scoreText.insertAdjacentElement("afterend", messageEl);

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                data: [score, totalQuestions - score],
                backgroundColor: ['#22c55e', '#ef4444'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: { size: 15 },
                    }
                }
            }
        }
    });

    const viewAnswersheetBtn = document.getElementById('viewAnswersheetBtn');
    const answerSheetModal = document.getElementById('answerSheetModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const answerSheetContent = document.getElementById('answerSheetContent');

    let storedAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || [];
    storedAnswers = storedAnswers.slice(0, 10);

    viewAnswersheetBtn.addEventListener('click', () => {
        answerSheetContent.innerHTML = '';

        storedAnswers.forEach((entry, index) => {
            const row = document.createElement('tr');
            row.className = entry.isCorrect ? "bg-green-100" : "bg-red-100";

            row.innerHTML = `
                <td class="border border-gray-300 p-2">${index + 1}</td>
                <td class="border border-gray-300 p-2">${entry.question}</td>
                <td class="border border-gray-300 p-2 ${entry.isCorrect ? 'text-green-600' : 'text-red-600'}">${entry.selectedAnswer || "Not Attempted"}</td>
                <td class="border border-gray-300 p-2 text-green-600">${entry.correctAnswer}</td>
            `;

            answerSheetContent.appendChild(row);
        });

        answerSheetModal.classList.remove('hidden');
        // Optional: Add fade-in for modal
        setTimeout(() => {
            answerSheetModal.style.opacity = "1";
        }, 10);
    });

    closeModalBtn.addEventListener('click', () => {
        answerSheetModal.style.opacity = "0";
        setTimeout(() => {
            answerSheetModal.classList.add('hidden');
        }, 300); // Match the transition duration
    });
});