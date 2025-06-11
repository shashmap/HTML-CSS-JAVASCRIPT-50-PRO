document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "What is a credit score?",
            options: [
                "A score that tracks attendance at work",
                "A number that indicates your income level",
                "A number that reflects your financial trustworthiness",
                "A test result from financial literacy class"
            ],
            correct: "A number that reflects your financial trustworthiness"
        },
        {
            question: "Why is budgeting important?",
            options: [
                "To restrict spending permanently",
                "To track and manage spending effectively",
                "To prepare taxes",
                "To avoid spending money at all"
            ],
            correct: "To track and manage spending effectively"
        }
    ];

    const list = document.getElementById("question-list");
    const form = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("result");
    let score = 0;

    function generateQuiz() {
        list.innerHTML = "";
        questions.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <p>${item.question}</p>
                <div class="options">
                    ${item.options.map((opt, i) => `
                        <label>
                            <input type="radio" name="q${index}" value="${opt}">
                            ${String.fromCharCode(97 + i)}. ${opt}
                        </label>
                    `).join("")}
                </div>
            `;
            list.appendChild(li);
        });
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        score = 0;
        const answers = form.querySelectorAll("input[type='radio']:checked");
        answers.forEach((answer) => {
            const questionIndex = answer.name.slice(1);
            const correctAnswer = questions[questionIndex].correct;
            if (answer.value === correctAnswer) {
                score++;
            }
        });

        resultDiv.textContent = `Your score: ${score}`;
    });

    generateQuiz();
});
