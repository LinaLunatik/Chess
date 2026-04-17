import { renderCell } from "./renderCell.js"
import { STYLES } from "../const.js"
import { isSameCell } from "./isSameCell.js";

export const buildChessBoardHTML = (state) => {

    const board = state.board
    const targetCells = new Set(
        state.possibleSteps.map(step => `${step.row},${step.col}`)
    );

    const trElements= board.map(row => {
        const tdElements = row.map(cell => {
            const isSelected = isSameCell(state.selectedCell, cell)
            const isPossibleStep = targetCells.has(`${cell.row},${cell.col}`)

            return renderCell(cell, { isSelected, isPossibleStep })
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