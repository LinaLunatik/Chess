import { COLORS, FIGURES } from "../const.js"

export const findKingCell = (state, colorOfKing) => {
    const isBlack = colorOfKing === COLORS.BLACK
    for (let row = 0; row < state.board.length; row++) {
        for (let col = 0; col < state.board[row].length; col++) {
            const cell = state.board[row][col]
            if (
                cell.figure === FIGURES.king &&
                cell.isBlack === isBlack
            ) {
                return { row, col }
            }
        }
    }
    return null
}