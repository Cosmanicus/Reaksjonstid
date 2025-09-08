// Består av en view funksjon som oppdaterer det grafiske vi viser frem.
// (Det er her vi viser frem all HTML-en vi ønsker å ha på siden).

// Jeg skrev row = 1 og row < 6 fordi da vil console.log skrive ut 1-1 som første
// og 5-5 som siste istedenfor 0-0 først og 4-4 sist
function updateView() {
    let html = `<div id="reactionGrid">`;
    for (let row = 1; row < 6; row++) {
        html += `<div class="row">`;
        for (let col = 1; col < 6; col++) {
            html += `<button onclick="thisButtonClicked('button-${row}-${col}')" id="button-${row}-${col}"></button>`;

            // Gjør hver knapp til objekter 
            // (for moro skyld. trenger ikke gjøre dette)
            
        }
        html += `</div>`;
    }
    html += `</div>`;
    appDiv.innerHTML = html;

    buttonArray.length = 0;
    for (let row = 1; row < 6; row++) {
        for (let col = 1; col < 6; col ++) {
            const buttonObject = document.getElementById(`button-${row}-${col}`)

            // Pusher knappene inn i array
            buttonArray.push(buttonObject);
        }
    }
}
updateView();
console.log('Length of array (should be 25)', buttonArray.length ,buttonArray);

