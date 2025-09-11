const rooks = document.querySelectorAll('.rook')
const knights = document.querySelectorAll('.knight')
const bishops = document.querySelectorAll('.bishop')
const queens = document.querySelectorAll('.queen')
const kings = document.querySelectorAll('.king')
const pawns = document.querySelectorAll('.pawn')

rooks.forEach(rook => {rook.addEventListener('click', possibleStepRook)}) 
knights.forEach(knight => {knight.addEventListener('click', possibleStepKnight)})
bishops.forEach(bishop => {bishop.addEventListener('click', possibleStepBishop)})
queens.forEach(queen => {queen.addEventListener('click', possibleStepQueen)})
kings.forEach(king => {king.addEventListener('click', possibleStepRookKing)})
pawns.forEach(pawn => {pawn.addEventListener('click', possibleStepPawn)})

function selectFigure(event) {
    const cell = event.target.parentElement;
    cell.classList.toggle('selectedItem')
}

function possibleStepRook(event) {
    selectFigure(event)
}

function possibleStepKnight(event) {
    selectFigure(event)
}

function possibleStepBishop(event) {
    selectFigure(event)
}

function possibleStepQueen(event) {
    selectFigure(event)
}

function possibleStepRookKing(event) {
    selectFigure(event)
}

function possibleStepPawn(event) {
    selectFigure(event)
}