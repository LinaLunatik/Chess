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
import { FIGURES, GAME_STATUS } from "../const.js"
import { kingSteps } from "../possibleStepsForFigures/kingSteps.js"
import { findAllFiguresByColor } from "./findAllFiguresByColor.js"
import { findAllPossibleSteps } from "./findAllPossibleSteps.js"
import { getAttackLine } from "./getAttackLine.js"
import { getValidSteps } from "./getValidSteps.js"
import { getOppositeColor } from "../../utils/getOppositeColor.js"
import { findFigureCell } from "./findFigureCell.js"
import { isSameCell } from "./isSameCell.js"
import { isCellAttacked } from "../../utils/isCellAttacked.js"

export const getGameStatus = (state, colorOfKing) => {
    const kingCell = findFigureCell(state, FIGURES.king, colorOfKing)
    if (!kingCell) {
        throw new Error(`Король не найден, цвет ${colorOfKing}`)
    }
    // Король под шахом ?
    const kingInCheck = isCellAttacked(
        state, kingCell.row, kingCell.col, getOppositeColor(colorOfKing)
    )

    // Ищем все фигуры, совпадающие цветом с королем
    const allCurrentFigures = findAllFiguresByColor(state, colorOfKing)
    const allCurrentSteps = findAllPossibleSteps(state, allCurrentFigures)
    // Если нет возможных ходов и король не под шахом, это ПАТ
    const hasAnyLegalStep = allCurrentSteps.length > 0
    if (!hasAnyLegalStep && !kingInCheck) return GAME_STATUS.stalemate

    if (kingInCheck) {
        // Может ли король отойти? 
        const geometricKingSteps = kingSteps(state, kingCell.row, kingCell.col)
        const kingTargetSteps = getValidSteps(state, geometricKingSteps, kingCell)
        const kingCanEscape = kingTargetSteps.length > 0
        if (kingCanEscape) return GAME_STATUS.check
        
        // Ищем фигуры соперника
        const allOpponentFigures = findAllFiguresByColor(state, getOppositeColor(colorOfKing))
        const allOpponentSteps = findAllPossibleSteps(state, allOpponentFigures)
        // Ищем атакующие фигуры
        const attackingFiguresCells = allOpponentSteps
            .filter(step => isSameCell(step, kingCell))
            .map(({ row, col }) => ({ row, col }))
        const attackingFigures = attackingFiguresCells.map(cell => {
            const boardCell = state.board[cell.row][cell.col]
            return {
                figure: boardCell.figure,
                row: cell.row,
                col: cell.col
            }
        })
        // Атакует 1 фигура ?
        const isSingleAttacker = attackingFigures.length === 1
        // Атакующую фигуру можно съесть ?
        const attackerCanBeCaptured =
            isSingleAttacker &&
            allCurrentSteps.some(step =>
                attackingFiguresCells.some(cell =>
                    isSameCell(step, cell)
                )
            )
        if (attackerCanBeCaptured) return GAME_STATUS.check

        // Есть ли среди атакующих конь? 
        const hasKnightAttackers = attackingFigures.some(item =>
            item.figure === FIGURES.knight
        )
        // Определяем линии атаки
        const attackLines = attackingFigures.map(attacker =>
            getAttackLine(attacker.row, attacker.col, kingCell.row, kingCell.col))
        const allAttackCells = attackLines.flat()
        // Можно ли короля закрыть?
        const canBeBlocked =
            isSingleAttacker &&
            !hasKnightAttackers &&
            attackLines.every(line => line.length) &&
            allCurrentSteps.some(step =>
                allAttackCells.some(cell =>
                    isSameCell(step, cell)
                )
            )
        if (canBeBlocked) return GAME_STATUS.check

        const kingHasNoEscapes =
            !kingCanEscape &&
            !canBeBlocked &&
            !attackerCanBeCaptured

        if (kingHasNoEscapes) return GAME_STATUS.checkmate
    }
    return GAME_STATUS.continue
}