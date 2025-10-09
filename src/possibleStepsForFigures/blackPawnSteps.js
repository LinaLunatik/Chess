export const blackPawnSteps = (rows, rowIndex, cellIndex) => {
        const directions = [
            [1, 0],
            [2, 0],
        ]

        directions.forEach(([rowDir, cellDir]) => {
            const targetRow = rowIndex + rowDir;
            const targetCell = cellIndex + cellDir;

            if (targetRow >= 1 && targetRow <= 8 && targetCell >= 1 && targetCell <= 8) {
                const targetCellElement = rows[targetRow].children[targetCell]
                targetCellElement.classList.add('possibleStep')
            }
        })
}