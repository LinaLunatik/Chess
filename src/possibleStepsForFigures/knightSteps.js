import { isOnChessBoard } from "/src/isOnChessBoard.js"
import { STYLES } from "../const.js"

export const knightSteps = (rows, rowIndex, cellIndex) => {
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

        directions.forEach(([rowDir, cellDir]) => {
            const targetRow = rowIndex + rowDir;
            const targetCell = cellIndex + cellDir;

            if (isOnChessBoard(targetRow, targetCell)) {
                    const targetCellElement = rows[targetRow].children[targetCell]
                    targetCellElement.classList.add(STYLES.possibleStep)
                }
        })
    }