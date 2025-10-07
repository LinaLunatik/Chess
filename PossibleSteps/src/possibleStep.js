import {getCellOnBoard} from './getCellOnBoard.js'
import { rookSteps } from './rookSteps.js'
import { bishopSteps } from './bishopSteps.js'
import { knightSteps } from './knightSteps.js'
import { kingSteps } from './kingSteps.js'
import { queenSteps } from './queenSteps.js'
import { blackPawnSteps } from './blackPawnSteps.js'
import { whitePawnSteps } from './whitePawnSteps.js'

export const possibleStep = (figure, event) => {
    const {cell, rows, cellIndex, rowIndex} = getCellOnBoard(event)

    const wasSelected = cell.classList.contains('selectedItem')
    cell.classList.toggle('selectedItem');

    const possibleStepMap = {
        rook: rookSteps,
        knight: knightSteps,
        bishop: bishopSteps,
        king: kingSteps,
        queen: queenSteps,
        blackPawn: blackPawnSteps,
        whitePawn: whitePawnSteps
    }

    if (wasSelected) {
        document.querySelectorAll('.possibleStep').forEach(el => { el.classList.remove('possibleStep') })
    } else {
        if (cell.classList.contains('selectedItem')) {
            possibleStepMap[figure](rows, rowIndex, cellIndex)
        }
    }
}