import { FIGURES } from "../const.js"

export const findKingCell = (state, colorOfKing) => {
    
    for (let row = 0; row < state.board.length; row++) {
        for (let col = 0; col < state.board[row].length; col++) {
            const cell = state.board[row][col]
            if (
                cell.figure === FIGURES.king &&
                cell.color === colorOfKing
            ) {
                return { row, col }
            }
        }
    }
    return null
}