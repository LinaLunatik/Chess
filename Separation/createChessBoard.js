import { CHESS_BOARD_SIZE } from "./src/const.js"

export const createChessBoard = () => {

    // let rows = ''
    // for (let i=0; i < 8; i++) {
    //     rows += '<tr>'
    //     for (let j=0; j < 8; j++) {
    //         rows += '<td></td>'
    //     } 
    //     rows += '</tr>'
    // }

    const row = '<tr>' + '<td></td>'.repeat(CHESS_BOARD_SIZE) + '</tr>'
    const rows = row.repeat(CHESS_BOARD_SIZE)

    const chessBoard = `<table>${rows}</table>`
    const root = document.getElementById('root')

    if(root) {root.innerHTML = chessBoard}
}