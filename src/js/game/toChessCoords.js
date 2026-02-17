import { CHESS_BOARD_SIZE } from "../const"

export const toChessCoords = (row, col) => {
    const cols = 'abcdefgh'
    const letter = cols[col]
    const number = CHESS_BOARD_SIZE - row

    return `${letter}${number}`
}
