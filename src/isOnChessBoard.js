import { CHESS_BOARD_SIZE } from "./const.js"

export const isOnChessBoard = (targetRow, targetCol) => {
    return (targetRow >= 0 &&
        targetRow < CHESS_BOARD_SIZE &&
        targetCol >= 0 &&
        targetCol < CHESS_BOARD_SIZE
    )
}
