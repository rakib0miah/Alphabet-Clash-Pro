// function play(){
//     const homeScreen =document.getElementById('home-screen');
//     homeScreen.classList.add('hidden')

//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')
    
// }

function handleKeyboardKeyUpEvent(event){
    const pleyerPressed = event.key;

    console.log(pleyerPressed)

    // get the expectedto press 
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(pleyerPressed,expectedAlphabet)

    // check matched or not 
    if(pleyerPressed === expectedAlphabet){
        console.log('You got a point')
    }
    else{ console.log('You loss a point')

    }

}

document.addEventListener('keyup', handleKeyboardKeyUpEvent)


function continueGame(){
    // step 1: generate a random alphabet 
    const alphabet = getARandomAlphabet();
    console.log('Your Random Alphabet', alphabet)

    // set randomly generated alphabet to the scree (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet

    // set background color 
    setBackgroundColorById(alphabet)
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
