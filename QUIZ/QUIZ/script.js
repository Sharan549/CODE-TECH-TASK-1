const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
        answer: "Harper Lee"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    const currentQuestion = quizData[currentQuestionIndex];

    quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        ${currentQuestion.options.map((option, index) => `
            <label>
                <input type="radio" name="answer" value="${option}" />
                ${option}
            </label>
        `).join('')}
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    for (const answer of answers) {
        if (answer.checked) {
            return answer.value;
        }
    }
    return null;
}

document.getElementById("submit").addEventListener("click", () => {
    const selectedAnswer = getSelected();

    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuiz();
        } else {
            const resultsContainer = document.getElementById("results");
            resultsContainer.innerHTML = `
                <h2>Your Score: ${score} out of ${quizData.length}</h2>
            `;
            document.getElementById("quiz").style.display = 'none';
            document.getElementById("submit").style.display = 'none';
        }
    } else {
        alert("Please select an answer!");
    }
});

loadQuiz();
