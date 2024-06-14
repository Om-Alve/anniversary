function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const correctPassword = 'loveofmylife'; // Replace with your desired password

    if (passwordInput.value === correctPassword) {
        alert('Correct password! Redirecting to the gift page...');
        window.location.href = 'gift.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        checkPassword();
    }
}