export const rookSteps = (rows, rowIndex, cellIndex) => {
        const directions = [
            [-1, 0],
            [0, -1],
            [0, 1],
            [1, 0]
        ]

        directions.forEach(([rowDir, cellDir]) => {
            for (let i = 1; i < 8; i++) {
                const targetRow = rowIndex + rowDir * i;
                const targetCell = cellIndex + cellDir * i;

                if (targetRow >= 1 && targetRow <= 8 && targetCell >= 1 && targetCell <= 8) {
                    const targetCellElement = rows[targetRow].children[targetCell]
                    targetCellElement.classList.add('possibleStep')
                }
            }
        })
    }