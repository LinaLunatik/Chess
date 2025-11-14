import { isOnChessBoard } from "/src/isOnChessBoard.js"
import { STYLES } from "../const.js"

export const queenSteps = (rows, rowIndex, cellIndex) => {
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

        directions.forEach(([rowDir, cellDir]) => {
            for (let i = 1; i < 8; i++) {
                const targetRow = rowIndex + rowDir * i;
                const targetCell = cellIndex + cellDir * i;

                if (isOnChessBoard(targetRow, targetCell)) {
                    const targetCellElement = rows[targetRow].children[targetCell]
                    targetCellElement.classList.add(STYLES.possibleStep)
                }
            }
        })
    }