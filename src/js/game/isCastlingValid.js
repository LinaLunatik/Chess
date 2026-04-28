import { getOppositeColor } from "../../utils/getOppositeColor.js";
import { CHESS_BOARD_SIZE, ROOK_SIDE } from "../const.js";
import { findKingCell } from "./findKingCell.js";
import { getCellsBetween } from "./getCellsBetween.js";
import { isCellAttacked } from "../../utils/isCellAttacked.js";

export const isCastlingValid = (state, color, rookSide) => {
    // Проверка прав рокировки
    if (!state.castlingRights?.[color]?.[rookSide]) {
        console.log('Нет прав на рокировку')
        return false
    }
    // Между королем и ладьей не должно быть других фигур
    const kingCell = findKingCell(state, color)
    if (!kingCell) {
        console.error('Король не найден')
        return false
    }

    const rookRow = kingCell.row
    const rookCol = rookSide === ROOK_SIDE.kingSide ? (CHESS_BOARD_SIZE - 1) : 0
    const rookCell = { row: rookRow, col: rookCol }

    const cellsBetween = getCellsBetween(kingCell, rookCell)

    const isPathClear = cellsBetween.every(cell => {
        const cellContent = state.board[cell.row][cell.col]
        return cellContent === null || cellContent.figure === null
    })  
    if (!isPathClear) return false

    // Король не должен быть под шахом до рокировки
    const attackingColor = getOppositeColor(color)

    const isItCheckBeforeCastling = isCellAttacked(
        state, kingCell.row, kingCell.col, attackingColor
    )
    if (isItCheckBeforeCastling) return false

    // Король может перескакивать только необстреливаемые поля
    // При длинной рокировке король не проходит последнюю клетку из массива cellsBetween
    // на шахматной доске соответствует b1/b8
    const cellsToCheck = rookSide === ROOK_SIDE.kingSide
        ? cellsBetween
        : cellsBetween.slice(0, -1)

    const isAnyCellAttacked = cellsToCheck.some(cell =>
        isCellAttacked(state, cell.row, cell.col, attackingColor)
    )
    if (isAnyCellAttacked) return false

    // Если все проверки пройдены успешно, рокировка разрешена
    return true
}
