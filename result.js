document.addEventListener('DOMContentLoaded', () => {
    let score = localStorage.getItem('quizScore') || 0;
    score = Number(score); 
    const totalQuestions = 10;
    const scoreText = document.getElementById('scoreText');
    const ctx = document.getElementById('scoreChart').getContext('2d');
    const messageEl = document.createElement('p');
    messageEl.className = "text-center mt-4 text-4xl font-bold";

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
});
