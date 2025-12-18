import { isOnChessBoard } from "/src/isOnChessBoard.js"

export const queenSteps = (state, row, col) => {
    const directions = [
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1],
        [-1, 0],
        [0, -1],
        [0, 1],
        [1, 0]
    ]

    let moves = []
    const currentColor = state.board[row][col][0]

    directions.forEach(([rowDir, colDir]) => {
        for (let i = 1; i < 8; i++) {
            const targetRow = row + rowDir * i;
            const targetCol = col + colDir * i;

            if (isOnChessBoard(targetRow, targetCol)) {
                const targetCellFigure = state.board[targetRow][targetCol]
                //если клетка пуста, можно идти
                if (targetCellFigure === '') { 
                    moves.push({ row: targetRow, col: targetCol, type: 'step' })
                }
                //если клетка занята фигурой своего цвета, стоп
                else if (targetCellFigure[0] === currentColor) {
                    break 
                }
                //если клетка занята фигурой чужого цвета, съесть, потом стоп
                else {
                    moves.push({ row: targetRow, col: targetCol, type: 'capture' })
                    break 
                }
            }
        }
    })
    return moves
}