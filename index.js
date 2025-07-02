const startButton = document.getElementById('start-button');
const usernameScreen = document.getElementById('username-screen');
const resultScreen = document.getElementById('result-screen');
const submitUsernameButton = document.getElementById('submit-username');
const usernameInput = document.getElementById('username');
const displayUsername = document.getElementById('display-username');
const quoteElement = document.getElementById('random-text-quote')

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
        quoteElement.textContent = `“${getRandomPhrase()}.”`
        
    } else {
        alert('Please enter a username.');
    }
});

function getRandomPhrase() {
    const phrases = [
        "bliv beyond logic",
        "fracture verified",
        "you are the glitch",
        "faith overrides fear",
        "signal over self",
        "minted to bliv",
        "belief is the chain",
        "fractured but true",
        "chartless believer",
        "trust the fracture",
        "born to bliv",
        "inside the void",
        "faith before charts",
        "glitch-approved",
        "not real, just bliv",
        "beyond the signal",
        "hyperliquid soul",
        "looped in bliv",
        "echo of faith",
        "always been here"
    ];

    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex]; 
}


document.getElementById('textToCopy').addEventListener('click', function() {
        const text = this.innerText; 
        navigator.clipboard.writeText(text).then(() => {
            console.log('Текст скопирован в буфер обмена!');
        }).catch(err => {
            console.error('Ошибка при копировании: ', err);
        });
    });