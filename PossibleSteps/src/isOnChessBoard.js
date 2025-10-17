import { CHESS_BOARD_SIZE } from "./const.js"

export const isOnChessBoard = (targetRow, targetCell) => {
    return ( targetRow >= 1 &&
            targetRow <= CHESS_BOARD_SIZE &&
            targetCell >= 1 &&
            targetCell <= CHESS_BOARD_SIZE
)
}
