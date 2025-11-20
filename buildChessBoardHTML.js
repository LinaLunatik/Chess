import { renderCell } from "./renderCell.js"
import { CHESS_BOARD_SIZE } from "./src/const.js"

export const buildChessBoardHTML = (state) => {

    const board = state.board
    const possibleStepSet = new Set(
        state.possibleSteps.map(step => `${step.row},${step.col}`)
    );

    let rowHTML = ''
    for (let i = 0; i < CHESS_BOARD_SIZE; i++) {
        rowHTML += '<tr>'
        for (let j = 0; j < CHESS_BOARD_SIZE; j++) {
            const piece = board[i][j];
            const isSelected = state.selectedFigure?.row === i && state.selectedFigure?.col === j;
            const isPossibleStep = possibleStepSet.has(`${i},${j}`);

            rowHTML += renderCell(piece, i, j, { isSelected, isPossibleStep })
        }
        rowHTML += '</tr>'
    }

    return `<table class="table">${rowHTML}</table>`
}