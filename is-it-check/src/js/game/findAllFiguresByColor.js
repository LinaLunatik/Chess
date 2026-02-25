import { COLORS } from "../const.js"

export const findAllFiguresByColor = (state, color) => {
    const isBlack = color === COLORS.BLACK
    const result = []
    for (let row = 0; row < state.board.length; row++) {
        for (let col = 0; col < state.board[row].length; col++) {
            const cell = state.board[row][col]
            if (cell.isBlack === isBlack) {
                result.push({figure: cell.figure, row, col})
            }
        }
    }
    return result
}