import { ASCII_CODE_A, CHESS_BOARD_SIZE } from "../const.js"

const cols = String.fromCharCode(...[...Array(CHESS_BOARD_SIZE)]
    .map((_, i) => ASCII_CODE_A + i))

export const convertToChessCoords = (row, col) => {
    const letter = cols[col]
    const number = CHESS_BOARD_SIZE - row

    return `${letter}${number}`
}