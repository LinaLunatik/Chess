import { CHESS_BOARD_SIZE, OPPOSITE_COLORS, ROOK_SIDE } from "../const.js";
import { findKingCell } from "./findKingCell.js";
import { getCellsBetween } from "./getCellsBetween.js";
import { isCellAttacked } from "./isCellAttacked.js";
import { isInCheck } from "./isInCheck.js";

export const isCastlingValid = (state, color, rookSide) => {
    
    // Проверка прав рокировки
    if (!state.castlingRights[color][rookSide]) {
        return false
    }

    // Между королем и ладьей не должно быть других фигур
    const kingCell = findKingCell(state, color)
    if (!kingCell) {
        return false
    }
    
    const rookRow = kingCell.row
    const rookCol = rookSide === ROOK_SIDE.kingSide ? (CHESS_BOARD_SIZE - 1) : 0
    const rookCell = {row: rookRow, col: rookCol}

    const cellsBetween = getCellsBetween(kingCell, rookCell)
    
    const isPathClear = cellsBetween.every(cell =>
        state.board[cell.row][cell.col] === null)

    if (!isPathClear) {
        return false
    }

    // Король не должен быть под шахом до рокировки
    const isItCheckBeforeCastling = isInCheck(state, color)
    if (isItCheckBeforeCastling) {
        return false
    }

    // Король может перескакивать только необстреливаемые поля
    // При длинной рокировке король не проходит последнюю клетку из массива cellsBetween
    // на шахматной доске соответствует b1/b8
    const cellsToCheck = rookSide === ROOK_SIDE.kingSide 
        ? cellsBetween
        : cellsBetween.slice(0, -1)
    const attackingColor = OPPOSITE_COLORS[color]

    const isAnyCellAttacked = cellsToCheck.some(cell =>
        isCellAttacked(state, cell, attackingColor)
    )

    if (isAnyCellAttacked) {
        return false
    }

    // Есди все проверки пройдены успешно, рокировка разрешена
    return true
}
