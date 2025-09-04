// Består av en view funksjon som oppdaterer det grafiske vi viser frem.
// (Det er her vi viser frem all HTML-en vi ønsker å ha på siden).

const appDiv = document.getElementById('app');
let buttonNumber = 0;

const buttonArray = [];


// Jeg skrev row = 1 og row < 6 fordi da vil console.log skrive ut 1-1 som første
// og 5-5 som siste istedenfor 0-0 først og 4-4 sist
function updateView() {
    let html = `<div id="reactionGrid">`;
    for (let row = 1; row < 6; row++) {
        html += `<div class="row">`;
        for (let col = 1; col < 6; col++) {
            html += `<button id="button-${row}-${col}">Here!</button>`;

            // Gjør hver knapp til objekter
            const buttonObject = {
                row: row,
                col: col
            };

            console.log(buttonObject);
            buttonArray.push(buttonObject);
            console.log(buttonArray)
        }
        html += `</div>`;
    }
    html += `</div>`;
    appDiv.innerHTML = html;

    for (let row = 1; row < 6; row++) {
        for (let col = 1; col < 6; col++) {
            console.log(document.getElementById(`button-${row}-${col}`));
        }
    }
}
updateView();

