import {getCellOnBoard} from './getCellOnBoard.js'

export function possibleStepKnight(event) {
    const {cell, rows, cellIndex, rowIndex} = getCellOnBoard(event)

    const wasSelected = cell.classList.contains('selectedItem')
    cell.classList.toggle('selectedItem');

    if (wasSelected) {
        document.querySelectorAll('.possibleStep').forEach(el => { el.classList.remove('possibleStep') })
    } else {
        if (cell.classList.contains('selectedItem')) {
            KnightStep1(rows, rowIndex, cellIndex);
            KnightStep2(rows, rowIndex, cellIndex);
            KnightStep3(rows, rowIndex, cellIndex);
            KnightStep4(rows, rowIndex, cellIndex);
            KnightStep5(rows, rowIndex, cellIndex);
            KnightStep6(rows, rowIndex, cellIndex);
            KnightStep7(rows, rowIndex, cellIndex);
            KnightStep8(rows, rowIndex, cellIndex)
        }
    }

    function KnightStep1(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex + 2
        const targetCellIndex = cellIndex + 1

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
    function KnightStep2(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex + 2
        const targetCellIndex = cellIndex - 1

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
    function KnightStep3(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex + 1
        const targetCellIndex = cellIndex - 2

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
    function KnightStep4(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex - 1
        const targetCellIndex = cellIndex - 2

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
    function KnightStep5(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex - 2
        const targetCellIndex = cellIndex - 1

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
    function KnightStep6(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex - 2
        const targetCellIndex = cellIndex + 1

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
    function KnightStep7(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex - 1
        const targetCellIndex = cellIndex + 2

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
    function KnightStep8(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex + 1
        const targetCellIndex = cellIndex + 2

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
}