
function keyPressed(event) {
    const playerPressed = event.key;
    if (playerPressed === 'Escape') {
        gameOver();
    }
    const randomAlpha = document.getElementById('current-alphabet');
    const currentAlphabet = randomAlpha.innerText.toLowerCase();

    // determining the right pressed key

    if (currentAlphabet === playerPressed) {
        const currentScore = getTextElementById('current-score');
        const newScore = currentScore + 1;
        setTextElementById('current-score', newScore);
        removeBackgroundColorById(currentAlphabet);
        // console.log(getTextElementById('current-score'));
        continueGame();
    }
    else {
        const currentLife = getTextElementById('current-life');
        const newLife = currentLife - 1;
        setTextElementById('current-life', newLife);
        if (newLife === 0) {
            gameOver();

        }
    }

}

// capture pressed key

document.addEventListener('keyup', keyPressed);



function continueGame() {
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    setTextElementById('current-score', 0);
    setTextElementById('current-life', 5);
    showElementById('play-ground');
    continueGame();
}
function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    const lastAlphaList = document.getElementById('current-alphabet');
    const lastAlpha = lastAlphaList.innerText;
    removeBackgroundColorById(lastAlpha);
    const target = getTextElementById('current-score');
    setTextElementById('total-score', target);
}