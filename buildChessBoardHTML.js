import { renderCell } from "./renderCell.js"
import { CHESS_BOARD_SIZE } from "./src/const.js"

export const buildChessBoardHTML = (state) => {

    const board = state.board

    let rowHTML = ''
    for (let i = 0; i < CHESS_BOARD_SIZE; i++) {
        rowHTML += '<tr>'
        for (let j = 0; j < CHESS_BOARD_SIZE; j++) {
            const piece = board[i][j]

            rowHTML += renderCell(piece, i, j)
        }
        rowHTML += '</tr>'
    }

    return `<table class="table">${rowHTML}</table>`
}