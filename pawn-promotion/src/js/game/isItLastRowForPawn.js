import { CHESS_BOARD_SIZE, FIGURES } from "../const.js"

export const isItLastRowForPawn = (figure, row) =>

    (figure === FIGURES.whitePawn && row === 0) ||
    (figure === FIGURES.blackPawn && row === (CHESS_BOARD_SIZE - 1))

