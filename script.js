document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startBtn");
    
    startBtn.addEventListener("click", () => {
        window.location.href = "rules.html"; // Redirect to quiz page
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startQuizBtn");
    
    startBtn.addEventListener("click", () => {
        window.location.href = "quiz.html"; // Redirect to quiz page
    });
});
