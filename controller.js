// funksjonene som oppdaterer dataene i modellen.
// Når man kaller på Controller funksjoner må man huske å kalle på updateView()
// etterpå, ellers vil ikke det grafiske oppdateres med de oppdaterte verdiene

// Brukes for å endre farge på knappene med en timer
function clickedButtonColorTimer(buttonClicked) {
    buttonClicked.style.backgroundColor = 'green'

    setTimeout(() => {
        buttonClicked.style.backgroundColor = 'rgb(83, 42, 13)'
        randomLight();
    }, 500);
}

// Brukes for å velge tilfeldig lys -> gjøre den gul
function randomLight() {
    const randomButton = buttonArray[Math.floor(Math.random() * buttonArray.length)];
    console.log("Random button chosen: ", randomButton);

    randomButton.style.backgroundColor = 'yellow'
}


// Brukes for å logge hvilken knapp som ble trykket
function thisButtonClicked(buttonId) {
    console.log('Id of button clicked: ', buttonId);
    const buttonClicked = document.getElementById(buttonId);

    clickedButtonColorTimer(buttonClicked);
}