import { visitEachCell } from "../../utils/visitEachCell.js"

export const findAllFiguresByColor = (state, color) => {

    const result = []

    visitEachCell(state, (cell, row, col) => {
        if (cell.color === color) {
            result.push({ figure: cell.figure, row, col })
        }
    })
    return result
}