import { MOVE_TYPES } from "../const.js"
import { isOnChessBoard } from "../game/isOnChessBoard.js"
import { getCell } from "../game/state.js"

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
    const { figure, color: currentColor } = getCell({row, col})

    if (!figure) return []

    directions.forEach(([rowDir, colDir]) => {
        const targetRow = row + rowDir;
        const targetCol = col + colDir;

        if (isOnChessBoard(targetRow, targetCol)) {
            const targetCell = getCell({row: targetRow, col: targetCol})
            const {figure: targetFigure, color: targetColor} = targetCell
            
            //если клетка пуста, можно идти
            if (targetFigure === null) {
                moves.push({ 
                    row: targetRow, 
                    col: targetCol, 
                    type: MOVE_TYPES.step 
                })
            }
            
            //если клетка занята фигурой чужого цвета, съесть, потом стоп
            else if (targetColor !== currentColor) {
                moves.push({ 
                    row: targetRow, 
                    col: targetCol, 
                    type: MOVE_TYPES.capture 
                })
            }
        }
    })
    return moves
}