const rook = document.querySelector('#rook')

rook.addEventListener('click', possibleStep)

function possibleStep(event) {
    const cell = event.target.parentElement;
    cell.style.background = '#b5daa4ff'
}