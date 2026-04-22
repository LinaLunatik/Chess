import { renderCell } from "./renderCell.js"
import { COLORS, STYLES } from "../const.js"
import { findKingCell } from "./findKingCell.js";
import { isInCheck } from "./isInCheck.js";
import { isSameCell } from "./isSameCell.js";

export const buildChessBoardHTML = (state) => {

    const board = state.board
    const targetCells = new Set(
        state.possibleSteps.map(step => `${step.row},${step.col}`)
    );

    const currentPlayerColor = state.isCurrentPlayerWhite ? COLORS.WHITE : COLORS.BLACK
    const kingCell = findKingCell(state, currentPlayerColor)
    const isKingInCheck = kingCell && 
        isInCheck(state, currentPlayerColor)

    const trElements= board.map(row => {
        const tdElements = row.map(cell => {
            const isSelected = isSameCell(state.selectedCell, cell)
            const isPossibleStep = targetCells.has(`${cell.row},${cell.col}`)

            return renderCell(cell, { isSelected, isPossibleStep, isCheck })
        });
        return `<tr class="${STYLES.chessBoard.row}">
                    ${tdElements.join('')}
                </tr>`;
    })

    return `<table class="${STYLES.chessBoard.container}">
                ${trElements.join('')}
            </table>`
}