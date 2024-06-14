function checkAnswers() {
    const correctAnswers = {
        q1: "Pikachu",
        q2: "Dead Poets Society",
        q3: "Teddy Bear",
        q4: "Sonu",
        q5: "Me"
    };

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    for (let [question, answer] of Object.entries(correctAnswers)) {
        const userAnswer = document.getElementById(question).value.trim().toLowerCase().replace(/\s+/g, '');
        if (userAnswer === answer.toLowerCase().replace(/\s+/g, '')) {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    if (score === totalQuestions) {
        resultDiv.innerHTML = `
            <p>Congratulations! You answered all the questions correctly and won! Some of the password has been revealed: _ _ o _ _ _ o _</p>
            <img src="congrats.gif" alt="Congratulations" class="centered-gif">
        `;
        resultDiv.classList.add('text-success');
    } else {
        resultDiv.textContent = `You got ${score} out of ${totalQuestions} correct. Try again!`;
        resultDiv.classList.add('text-danger');
    }
}