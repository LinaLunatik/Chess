import {getCellOnBoard} from './getCellOnBoard.js'
import { STYLES, possibleStepsMap } from './const.js'

export const lightPossibleSteps = (figure, event) => {
    const {cell, rows, cellIndex, rowIndex} = getCellOnBoard(event)

    const isSelected = cell.classList.contains(STYLES.selectedItem)
    cell.classList.toggle(STYLES.selectedItem);

    if (isSelected) {
        document.querySelectorAll('.' + STYLES.possibleStep).forEach(el => { 
            el.classList.remove(STYLES.possibleStep) })
    } else {
        if (cell.classList.contains(STYLES.selectedItem)) {
            possibleStepsMap[figure](rows, rowIndex, cellIndex)
        }
    }
}