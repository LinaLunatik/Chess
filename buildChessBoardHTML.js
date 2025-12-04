import { renderCell } from "./renderCell.js"
import { CHESS_BOARD_SIZE } from "./src/const.js"

export const buildChessBoardHTML = (state) => {

    const board = state.board
    const targetCells = new Set(
        state.possibleSteps.map(step => `${step.row},${step.col}`)
    );

    const trElements= board.map(row => {
        const tdElements = row.map(cell => {
            const isSelected = state.selectedCell?.row === cell.row &&
                                state.selectedCell?.col === cell.col;
            const isPossibleStep = targetCells.has(`${cell.row},${cell.col}`);

            return renderCell(cell, { isSelected, isPossibleStep })
        });
        return `<tr>${tdElements.join('')}</tr>`;
    })
    return `<table class="table">${trElements.join('')}</table>`
}