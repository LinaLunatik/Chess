import { CHESS_BOARD_SIZE } from "./src/const.js"
import { initialState } from "./state.js"
import { renderCell } from "./renderCell.js"

export const createChessBoard = () => {

    const board = initialState.board

    let rowHTML = ''
    for (let i = 0; i < CHESS_BOARD_SIZE; i++) {
        rowHTML += '<tr>'
        for (let j = 0; j < CHESS_BOARD_SIZE; j++) {
            const piece = board[i][j]

            rowHTML += renderCell(piece, i, j)
        }
        rowHTML += '</tr>'
    }

    const chessBoard = `<table class="table">${rowHTML}</table>`
    const root = document.getElementById('root')

    if(root) {root.innerHTML = chessBoard}
}

// const row = '<tr>' + '<td></td>'.repeat(CHESS_BOARD_SIZE) + '</tr>'
// const rows = row.repeat(CHESS_BOARD_SIZE)



