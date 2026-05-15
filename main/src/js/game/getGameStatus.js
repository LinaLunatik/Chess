/**
 * Определяет текущий статус игры для указанного цвета короля.
 * 
 * Параметры:
 * state - Текущее состояние игры
 * colorOfKing - Цвет короля для проверки
 * Результат:
 * Один из GAME_STATUS: 'checkmate', 'stalemate', 'check', 'continue'
 * Ошибка - если король не найден на доске
 */
import { FIGURES, GAME_STATUS, possibleStepsMap } from "../const.js"
import { findAllFiguresByColor } from "./findAllFiguresByColor.js"
import { getOppositeColor } from "../../utils/getOppositeColor.js"
import { findFigureCell } from "./findFigureCell.js"
import { isCellAttacked } from "../../utils/isCellAttacked.js"
import { isMoveLegalUnderCheck } from "./isMoveLegalUnderCheck.js"

export const getGameStatus = (state, colorOfKing) => {
    const kingCell = findFigureCell(state, FIGURES.king, colorOfKing)
    if (!kingCell) {
        throw new Error(`Король не найден, цвет ${colorOfKing}`)
    }

    const opponentColor = getOppositeColor(colorOfKing)
   
    // Король под шахом ?
    const kingInCheck = isCellAttacked(
        state.board, kingCell.row, kingCell.col, opponentColor
    )
    // Ищем все фигуры, совпадающие цветом с королем
    const allMyFigures = findAllFiguresByColor(state, colorOfKing)
    // Ищем хотя бы 1 возможный ход
    let hasAnyLegalMove = false
    for (let fig of allMyFigures) {
        const getSteps = possibleStepsMap[fig.figure]
        if (!getSteps) continue

        const geometricSteps = getSteps(state, fig.row, fig.col) || []

        for (let step of geometricSteps) {
            if (isMoveLegalUnderCheck(state, fig, step, colorOfKing)) {
                hasAnyLegalMove = true
                break
            }
        }
        if (hasAnyLegalMove) break
    }
    // === ИТОГ ===
    if (!hasAnyLegalMove) {
        return kingInCheck ? GAME_STATUS.checkmate : GAME_STATUS.stalemate
    } else {
        return kingInCheck ? GAME_STATUS.check : GAME_STATUS.continue
    }
}