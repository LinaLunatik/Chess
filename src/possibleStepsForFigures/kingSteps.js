import { isOnChessBoard } from "/src/isOnChessBoard.js"

export const kingSteps = (state, row, col) => {
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
        const targetRow = row + rowDir;
        const targetCol = col + colDir;

        if (isOnChessBoard(targetRow, targetCol)) {
            const targetCellFigure = state.board[targetRow][targetCol]
            if (targetCellFigure === '') { //если клетка пуста, можно идти
                moves.push({ row: targetRow, col: targetCol, type: 'step' })
            }
            else if (targetCellFigure[0] !== currentColor) {
                moves.push({ row: targetRow, col: targetCol, type: 'capture' })
                //если клетка занята фигурой чужого цвета, съесть, потом стоп
            }
        }
    })
    return moves
}