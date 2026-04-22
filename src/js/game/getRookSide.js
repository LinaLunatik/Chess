import { CHESS_BOARD_SIZE, ROOK_SIDE } from "../const.js"

/**
 * Определяет сторону доски (королевская или ферзевая) по столбцу ладьи.
 * Возвращает null, если ладья стоит не в крайнем столбце.
 * 
 * @param {number} col - Координата столбца (от 0 до 7)
 * @returns {'queenSide' | 'kingSide' | null} - Название стороны доски или null
 */

export const getRookSide = (col) => {
    if (col === 0) {
        return ROOK_SIDE.queenSide
    }
    if (col === (CHESS_BOARD_SIZE - 1)) {
        return ROOK_SIDE.kingSide
    }
    return null
}