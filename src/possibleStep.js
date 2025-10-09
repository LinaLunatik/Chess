import {getCellOnBoard} from './getCellOnBoard.js'
import { rookSteps } from './possibleStepsForFigures/rookSteps.js'
import { bishopSteps } from './possibleStepsForFigures/bishopSteps.js'
import { knightSteps } from './possibleStepsForFigures/knightSteps.js'
import { kingSteps } from './possibleStepsForFigures/kingSteps.js'
import { queenSteps } from './possibleStepsForFigures/queenSteps.js'
import { blackPawnSteps } from './possibleStepsForFigures/blackPawnSteps.js'
import { whitePawnSteps } from './possibleStepsForFigures/whitePawnSteps.js'

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