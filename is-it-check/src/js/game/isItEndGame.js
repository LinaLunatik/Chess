import { FIGURES, OPPOSITE_COLORS } from "../const.js"
import { kingSteps } from "../possibleStepsForFigures/kingSteps.js"
import { findAllFiguresByColor } from "./findAllFiguresByColor.js"
import { findAllPossibleSteps } from "./findAllPossibleSteps.js"
import { findKingCell } from "./findKingCell.js"
import { getAttackLine } from "./getAttackLine.js"
import { getValidStepsKing } from "./getValidStepsKing.js"
import { isItCheck } from "./isItCheck.js"

export const isItEndGame = (state, colorOfKing) => {
    // Случай 1. Может ли король отойти?
    const kingCell = findKingCell(state, colorOfKing)
    const geometricKingSteps = kingSteps(state, kingCell.row, kingCell.col)
    const kingTargetSteps = getValidStepsKing(state, geometricKingSteps, kingCell)
    
    // Случай 2. Можно ли короля закрыть?
    //ищем фигуры соперника
    const allOpponentFigures = findAllFiguresByColor(state, OPPOSITE_COLORS[colorOfKing])
    const allOpponentSteps = findAllPossibleSteps(state, allOpponentFigures)
    // ищем все фигуры, совпадающие цветом с королем
    const allCurrentFigures = findAllFiguresByColor(state, colorOfKing)
    const allCurrentSteps = findAllPossibleSteps(state, allCurrentFigures)

    const attackingFiguresCells = allOpponentSteps
        .filter(step =>
            step.row === kingCell.row &&
            step.col === kingCell.col)
        .map(cell => (
            { row: cell.row, col: cell.col }
        ))
    // ищем атакующие фигуры
    const attackingFigures = attackingFiguresCells.map(cell => {
        const boardCell = state.board[cell.row][cell.col]
        return {
            figure: boardCell.figure,
            row: cell.row,
            col: cell.col
        }
    })
    // атакует 1 фигура ?
    const isSingleAttacker = attackingFigures.length === 1
    // есть ли среди атакующих конь? 
    const hasKnightAttackers = attackingFigures.some(item =>
        item.figure?.type === FIGURES.knight
    )
    // определяем линии атаки
    const attackLines = attackingFigures.map(attacker =>
        getAttackLine(attacker.row, attacker.col, kingCell.row, kingCell.col))

    const allAttackCells = attackLines.flat()
    
    //можно ли короля закрыть ?
    const canBeBlocked =
        isSingleAttacker &&
        !hasKnightAttackers &&
        attackLines.every(line => line.length > 0) &&
        allCurrentSteps.some(step =>
            allAttackCells.some(cell =>
                step.row === cell.row &&
                step.col === cell.col
            )
        )

    // Случай 3. Атакующую фигуру можно съесть ?
    // можно ли съесть атакующую фигуру
    const attackerCanBeCaptured =
        isSingleAttacker &&
        allCurrentSteps.some(step =>
            attackingFiguresCells.some(cell =>
                step.row === cell.row &&
                step.col === cell.col
            )
        )
    
    // ИТОГО
    const kingInCheck = isItCheck(state, colorOfKing)

    const isItStalemate =
        kingTargetSteps.length < 1 &&
        !canBeBlocked &&
        !attackerCanBeCaptured &&
        !kingInCheck

    const isItCheckmate =
        kingTargetSteps.length < 1 &&
        !canBeBlocked &&
        !attackerCanBeCaptured &&
        kingInCheck

    return {
        isItCheckmate,
        isItStalemate,
        isCheck: kingInCheck
    }
}