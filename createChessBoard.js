export const createChessBoard = () => {
    const root = document.getElementById('root')

    let rows = ''
    for (let i=0; i < 8; i++) {
        rows += '<tr>'
        for (let j=0; j < 8; j++) {
            rows += '<td></td>'
        } 
        rows += '</tr>'
    }

    const chessBoard = '<table>' + rows + '</table>'
    
    if(root) {root.innerHTML = chessBoard}
}