import { CHESS_BOARD_SIZE, MOVE_TYPES } from "../const.js"
import { isOnChessBoard } from "../game/isOnChessBoard.js"
import { getCell } from "../game/state.js"

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
    const { figure, color: currentColor } = getCell({row, col})

    if (!figure) return []

    directions.forEach(([rowDir, colDir]) => {
        for (let i = 1; i < CHESS_BOARD_SIZE; i++) {
            const targetRow = row + rowDir * i;
            const targetCol = col + colDir * i;

            if (isOnChessBoard(targetRow, targetCol)) {
                const targetCell = getCell({row: targetRow, col: targetCol})
                const { figure: targetFigure, color: targetColor} = targetCell
                
                //если клетка пуста, можно идти
                if (targetFigure === null) { 
                    moves.push({ 
                        row: targetRow, 
                        col: targetCol, 
                        type: MOVE_TYPES.step 
                    })
                }
                
                //если клетка занята фигурой своего цвета, стоп
                else if (targetColor === currentColor) {
                    break 
                }
                
                //если клетка занята фигурой чужого цвета, съесть, потом стоп
                else {
                    moves.push({ 
                        row: targetRow, 
                        col: targetCol, type: 
                        MOVE_TYPES.capture 
                    })
                    break 
                }
            }
        }
    })
    return moves
}