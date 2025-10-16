import { isOnChessBoard } from "/src/isOnChessBoard.js"

export const bishopSteps = (rows, rowIndex, cellIndex) => {
        const directions = [
            [-1, -1],
            [-1, 1],
            [1, -1],
            [1, 1]
        ]

        directions.forEach(([rowDir, cellDir]) => {
            for (let i = 1; i < 8; i++) {
                const targetRow = rowIndex + rowDir * i;
                const targetCell = cellIndex + cellDir * i;

                if (isOnChessBoard(targetRow, targetCell)) {
                    const targetCellElement = rows[targetRow].children[targetCell]
                    targetCellElement.classList.add('possibleStep')
                }
            }
        })
    }