import { MOVE_TYPES } from "../const.js"
import { isOnChessBoard } from "/src/isOnChessBoard.js"

export const bishopSteps = (state, row, col) => {
    const directions = [
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1]
    ]
    let moves = []

    const currentCell = state.board[row][col]
    const currentIsBlack = currentCell.isBlack

    if (!currentCell.figure) return []

    directions.forEach(([rowDir, colDir]) => {
        for (let i = 1; i < 8; i++) {
            const targetRow = row + rowDir * i;
            const targetCol = col + colDir * i;

            if (isOnChessBoard(targetRow, targetCol)) {
                const targetCell = state.board[targetRow][targetCol]
                
                //если клетка пуста, можно идти
                if (targetCell.figure === null) { 
                    moves.push({ 
                        row: targetRow, 
                        col: targetCol, 
                        type: MOVE_TYPES.step })
                }
                //если клетка занята фигурой своего цвета, стоп
                else if (targetCell.figure !== null &&
                        targetCell.isBlack === currentIsBlack) {
                    break 
                }
                //если клетка занята фигурой чужого цвета, съесть, потом стоп
                else {
                    moves.push({ 
                        row: targetRow, 
                        col: targetCol, 
                        type: MOVE_TYPES.capture })
                    break 
                }
            }
        }
    })
    return moves
}