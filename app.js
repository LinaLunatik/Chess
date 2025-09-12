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

function possibleStepRook(event) {
    const cell = event.target.parentElement; //ячейка с ладьей
    const raw = cell.parentElement;         //строка с ладьей
    const td_raw = raw.querySelectorAll('td'); //все ячейки строки с ладьей
    const rawIndex = Array.from(td_raw).indexOf(cell)
    
    cell.classList.toggle('selectedItem');

    if (cell.classList.contains('selectedItem')) {
        td_raw.forEach(td => {
            if (td!==cell && !td.classList.contains('field-td')) 
            {td.classList.add('possibleStep')}
        });
        
        const td = document.querySelectorAll('tr')
        td.forEach(raw => { 
            if (!raw.classList.contains('field-tr')) {
            raw.children[rawIndex].classList.add('possibleStep')}
        }) 
    } else {
        td_raw.forEach(td => {if (td!==cell) {td.classList.remove('possibleStep')}});
        document.querySelectorAll('tr').forEach(raw => {
            raw.children[rawIndex].classList.remove('possibleStep')
        })     
    }
}

function possibleStepKnight(event) {
}

function possibleStepBishop(event) {
}

function possibleStepQueen(event) {
}

function possibleStepRookKing(event) {
}

function possibleStepPawn(event) {
}