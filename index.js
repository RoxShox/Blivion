const startButton = document.getElementById('start-button');
const usernameScreen = document.getElementById('username-screen');
const resultScreen = document.getElementById('result-screen');
const submitUsernameButton = document.getElementById('submit-username');
const usernameInput = document.getElementById('username');
const displayUsername = document.getElementById('display-username');
const quoteElement = document.getElementById('random-text-quote')
const faithLevel = document.getElementById('faith-level')
const mainDate = document.getElementById('date')

startButton.addEventListener('click', () => {
    document.getElementById('start-screen').classList.add('hidden');
    usernameScreen.classList.remove('hidden');
});

submitUsernameButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.querySelector('.progress');

    if (username) {
        usernameScreen.classList.add('hidden');
         loadingScreen.classList.remove('hidden');
        let progress = 0;
        const interval = setInterval(() => {
            progress += 5; // Увеличиваем прогресс на 10%
            progressBar.style.width = progress + '%';

            if (progress >= 100) {
                clearInterval(interval);
                displayUsername.textContent = `@${username}`;
                usernameScreen.classList.add('hidden');
                loadingScreen.classList.add('hidden')
                resultScreen.classList.remove('hidden');
                quoteElement.textContent = `“${getRandomPhrase()}.”`
                faithLevel.textContent = `${getRandomInteger()}% / ∞`;
                mainDate.textContent=formatDate()
            }
        }, 100); 
        
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

function getRandomInteger() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

function formatDate() {
    const date = new Date()
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}


document.getElementById('textToCopy').addEventListener('click', function() {
        const text = this.innerText; 
        navigator.clipboard.writeText(text).then(() => {
            console.log('Текст скопирован в буфер обмена!');
        }).catch(err => {
            console.error('Ошибка при копировании: ', err);
        });
    });
const mainContentNumber = document.getElementById('mainContentNumber');
const tooltip = document.getElementById('tooltip');

 mainContentNumber.addEventListener('mousemove', function(e) {
    const rect = mainContentNumber.getBoundingClientRect();
    const x = e.clientX - rect.left;  // Координата X внутри mainContentNumber
    const y = e.clientY - rect.top;   // Координата Y внутри mainContentNumber

    tooltip.style.left = (x + 0) + 'px'; // Отступ от курсора внутри mainContentNumber
    tooltip.style.top = (y + 0) + 'px'; // Отступ от курсора внутри mainContentNumber
  });

mainContentNumber.addEventListener('mouseenter', function() {
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
});

mainContentNumber.addEventListener('mouseleave', function() {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
});