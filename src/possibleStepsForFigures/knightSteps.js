import { MOVE_TYPES } from "../const.js"
import { isOnChessBoard } from "/src/isOnChessBoard.js"

export const knightSteps = (state, row, col) => {
    const directions = [
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
        [-1, 2],
        [1, 2]
    ]

    let moves = []
    const currentColor = state.board[row][col][0]

    directions.forEach(([rowDir, colDir]) => {
        const targetRow = row + rowDir;
        const targetCol = col + colDir;

        if (isOnChessBoard(targetRow, targetCol)) {
            const targetCellFigure = state.board[targetRow][targetCol]
            
            //если клетка пуста, можно идти
            if (targetCellFigure === '') {
                moves.push({ 
                    row: targetRow, col: targetCol, type: MOVE_TYPES.step })
            }
            
            //если клетка занята фигурой чужого цвета, съесть, потом стоп
            else if (targetCellFigure[0] !== currentColor) {
                moves.push({ 
                    row: targetRow, col: targetCol, type: MOVE_TYPES.capture })
            }
        }
    })
    return moves
}