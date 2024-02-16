// function play(){
//     const homeScreen =document.getElementById('home-screen');
//     homeScreen.classList.add('hidden')

//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')

// }

function handleKeyboardKeyUpEvent(event) {
  const pleyerPressed = event.key;

  // console.log(pleyerPressed)

  // get the expectedto press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(pleyerPressed,expectedAlphabet)

  // check matched or not
  if (pleyerPressed === expectedAlphabet) {
    // console.log('You got a point');
    // update score:
    // 1. get the current score
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);

    // 2. increase the score by 1
    const newScore = currentScore + 1;
    console.log(newScore);

    // 3. show the update score 
    currentScoreElement.innerText = newScore
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("You loss a point");
    // step 1: get the current life number 
    const currentLifeElement = document.getElementById('cureent-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);

    // step 2: reduce current life 
    const newLife = currentLife - 1;
    // step 3: display the updated life count 
    currentLifeElement.innerText = newLife
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  // step 1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  // console.log('Your Random Alphabet', alphabet)

  // set randomly generated alphabet to the scree (show it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
