import {possibleStepRook} from './possibleStepRook.js'
import {possibleStepKnight} from './possibleStepKnight.js'
import {possibleStepBishop} from './possibleStepBishop.js'
import {possibleStepQueen} from './possibleStepQueen.js'
import {possibleStepKing} from './possibleStepKing.js'
import {possibleStepPawn} from './possibleStepPawn.js'

export const handleCellClick = (event) => {
    const cell = event.currentTarget
    if (cell.querySelector('.rook')) {possibleStepRook(event)}
    else if(cell.querySelector('.knight')) {possibleStepKnight(event)}
    else if (cell.querySelector('.bishop')) {possibleStepBishop(event)}
    else if (cell.querySelector('.queen')) {possibleStepQueen(event)}
    else if (cell.querySelector('.king')) {possibleStepKing(event)}
    else if (cell.querySelector('.pawn')) {possibleStepPawn(event)}
    else {event.currentTarget.classList.toggle('selectedItem') }
}