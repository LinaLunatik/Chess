import { isOnChessBoard } from "/src/isOnChessBoard.js"

export const kingSteps = (rows, rowIndex, cellIndex) => {
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
            const targetRow = rowIndex + rowDir;
            const targetCell = cellIndex + cellDir;

            if (isOnChessBoard(targetRow, targetCell)) {
                const targetCellElement = rows[targetRow].children[targetCell]
                targetCellElement.classList.add('possibleStep')
            }
        })
    }