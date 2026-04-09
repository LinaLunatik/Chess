import { FIGURES } from "../const.js"
import { kingSteps } from "../possibleStepsForFigures/kingSteps.js"
import { findAllFiguresByColor } from "./findAllFiguresByColor.js"
import { findAllPossibleSteps } from "./findAllPossibleSteps.js"
import { getAttackLine } from "./getAttackLine.js"
import { getValidSteps } from "./getValidSteps.js"
import { isItCheck } from "./isItCheck.js"
import { getOppositeColor } from "../../utils/getOppositeColor.js"
import { findFigureCell } from "./findFigureCell.js"
import { isSameCell } from "./isSameCell.js"

export const isItEndGame = (state, colorOfKing) => {
    // Случай 1. Может ли король отойти?
    const kingCell = findFigureCell(state, FIGURES.king, colorOfKing)
    if (!kingCell) {
        return {
            isItCheckmate: false,
            isItStalemate: false,
            isCheck: false
        }
    }
    const geometricKingSteps = kingSteps(state, kingCell.row, kingCell.col)
    const kingTargetSteps = getValidSteps(state, geometricKingSteps, kingCell)

    // Случай 2. Можно ли короля закрыть?
    //ищем фигуры соперника
    const allOpponentFigures = findAllFiguresByColor(state, getOppositeColor(colorOfKing))
    const allOpponentSteps = findAllPossibleSteps(state, allOpponentFigures)
    // ищем все фигуры, совпадающие цветом с королем
    const allCurrentFigures = findAllFiguresByColor(state, colorOfKing)
    const allCurrentSteps = findAllPossibleSteps(state, allCurrentFigures)

    const attackingFiguresCells = allOpponentSteps
        .filter(step => isSameCell(step, kingCell))
        .map(({ row, col }) => ({ row, col }))
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
        attackLines.every(line => line.length) &&
        allCurrentSteps.some(step =>
            allAttackCells.some(cell =>
                isSameCell(step, cell)
            )
        )

    // Случай 3. Атакующую фигуру можно съесть ?
    // можно ли съесть атакующую фигуру
    const attackerCanBeCaptured =
        isSingleAttacker &&
        allCurrentSteps.some(step =>
            attackingFiguresCells.some(cell =>
                isSameCell(step, cell)
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