import { lightPossibleSteps } from './lightPossibleSteps.js'
import { NAMES } from './const.js'
import { getCellOnBoard } from './getCellOnBoard.js'

export const handleCellClick = (cell) => {

    const coords = getCellOnBoard(cell)
    const {rows, cellIndex, rowIndex} = coords

    const figures = Object.values(NAMES)

    for (let figure of figures) {
        if (cell.querySelector('.' + figure)) {
            lightPossibleSteps(figure, cell, rows, cellIndex, rowIndex)
        }
    }

}