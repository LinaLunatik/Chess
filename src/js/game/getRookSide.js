import { CHESS_BOARD_SIZE } from "../const.js"

export const getRookSide = (col) => {
    if (col === 0) {
        return 'queenSide'
    }
    if (col === (CHESS_BOARD_SIZE - 1)) {
        return 'kingSide'
    }
    return null
}