import {getCellOnBoard} from './getCellOnBoard.js'
import { rookSteps } from './possibleStepsForFigures/rookSteps.js'
import { bishopSteps } from './possibleStepsForFigures/bishopSteps.js'
import { knightSteps } from './possibleStepsForFigures/knightSteps.js'
import { kingSteps } from './possibleStepsForFigures/kingSteps.js'
import { queenSteps } from './possibleStepsForFigures/queenSteps.js'
import { getPawnSteps } from './possibleStepsForFigures/getPawnSteps.js'
import { NAMES } from './const.js'
import { STYLES } from './const.js'

export const lightPossibleSteps = (figure, event) => {
    const {cell, rows, cellIndex, rowIndex} = getCellOnBoard(event)

    const isSelected = cell.classList.contains(STYLES.selectedItem)
    cell.classList.toggle(STYLES.selectedItem);

    const possibleStepsMap = {
        [NAMES.rook]: rookSteps,
        [NAMES.knight]: knightSteps,
        [NAMES.bishop]: bishopSteps,
        [NAMES.king]: kingSteps,
        [NAMES.queen]: queenSteps,
        [NAMES.blackPawn]: getPawnSteps({isBlack:true}),
        [NAMES.whitePawn]: getPawnSteps({isBlack:false})
    }

    if (isSelected) {
        document.querySelectorAll('.' + STYLES.possibleStep).forEach(el => { 
            el.classList.remove(STYLES.possibleStep) })
    } else {
        if (cell.classList.contains(STYLES.selectedItem)) {
            possibleStepsMap[figure](rows, rowIndex, cellIndex)
        }
    }
}