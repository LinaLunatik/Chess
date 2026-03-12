import { renderCell } from "./renderCell.js"
import { COLORS, STYLES } from "../const.js"
import { findKingCell } from "./findKingCell.js";
import { isItCheck } from "./isItCheck.js";

export const buildChessBoardHTML = (state) => {

    const board = state.board
    const targetCells = new Set(
        state.possibleSteps.map(step => `${step.row},${step.col}`)
    );

    const currentPlayerColor = state.isCurrentPlayerWhite ? COLORS.WHITE : COLORS.BLACK
    const kingCell = findKingCell(state, currentPlayerColor)
    const isKingInCheck = kingCell && 
        isItCheck(state, currentPlayerColor)

    const trElements= board.map(row => {
        const tdElements = row.map(cell => {
            const isSelected = 
                state.selectedCell?.row === cell.row &&
                state.selectedCell?.col === cell.col;
            const isPossibleStep = targetCells.has(`${cell.row},${cell.col}`)
            const isCheck = 
                isKingInCheck &&
                cell.row === kingCell.row  &&
                cell.col === kingCell.col 

            return renderCell(cell, { isSelected, isPossibleStep, isCheck })
        });
        return `<tr>
                    ${tdElements.join('')}
                </tr>`;
    })

    return `<table 
                class="${STYLES.table}">
                    ${trElements.join('')}
            </table>`
}