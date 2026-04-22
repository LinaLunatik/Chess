import { visitEachCell } from "../../utils/visitEachCell.js"

export const findFigureCell = (state, figureKey, colorOfKing) => {
    let result = null

    visitEachCell(state, (cell, row, col) => {
        if (
            cell.figure === figureKey &&
            cell.color === colorOfKing
        ) {
            result = { row, col }
        }
    })
    return result
}