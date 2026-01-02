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
    const currentCell = state.board[row][col]
    const currentIsBlack = currentCell.isBlack

    if (!currentCell.figure) return []

    directions.forEach(([rowDir, colDir]) => {
        const targetRow = row + rowDir;
        const targetCol = col + colDir;

        if (isOnChessBoard(targetRow, targetCol)) {
            const targetCell = state.board[targetRow][targetCol]
            
            //если клетка пуста, можно идти
            if (targetCell.figure === null) {
                moves.push({ 
                    row: targetRow, 
                    col: targetCol, 
                    type: MOVE_TYPES.step })
            }
            
            //если клетка занята фигурой чужого цвета, съесть
            else if (targetCell.isBlack !== currentIsBlack) {
                moves.push({ 
                    row: targetRow, 
                    col: targetCol, 
                    type: MOVE_TYPES.capture })
            }
        }
    })
    return moves
}