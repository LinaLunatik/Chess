import {getCellOnBoard} from './getCellOnBoard.js'

export function possibleStepKing(event) {
    const {cell, rows, cellIndex, rowIndex} = getCellOnBoard(event)

    const wasSelected = cell.classList.contains('selectedItem')
    cell.classList.toggle('selectedItem');

    if (wasSelected) {
        document.querySelectorAll('.possibleStep').forEach(el => { el.classList.remove('possibleStep') })
    } else {
        if (cell.classList.contains('selectedItem')) {
            KingSteps(rows, rowIndex, cellIndex)
        }
    }

    function KingSteps(rows, rowIndex, cellIndex) {
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

            if (targetRow >= 1 && targetRow <= 8 && targetCell >= 1 && targetCell <= 8) {
                const targetCellElement = rows[targetRow].children[targetCell]
                targetCellElement.classList.add('possibleStep')
            }
        })
    }
}