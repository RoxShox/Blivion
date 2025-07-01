const startButton = document.getElementById('start-button');
const usernameScreen = document.getElementById('username-screen');
const resultScreen = document.getElementById('result-screen');
const submitUsernameButton = document.getElementById('submit-username');
const usernameInput = document.getElementById('username');
const displayUsername = document.getElementById('display-username');

startButton.addEventListener('click', () => {
    document.getElementById('start-screen').classList.add('hidden');
    usernameScreen.classList.remove('hidden');
});

submitUsernameButton.addEventListener('click', () => {
    const username = usernameInput.value;
    if (username) {
        displayUsername.textContent = `@${username}`;
        usernameScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
    } else {
        alert('Please enter a username.');
    }
});

document.getElementById('textToCopy').addEventListener('click', function() {
        const text = this.innerText; 
        navigator.clipboard.writeText(text).then(() => {
            console.log('Текст скопирован в буфер обмена!');
        }).catch(err => {
            console.error('Ошибка при копировании: ', err);
        });
    });