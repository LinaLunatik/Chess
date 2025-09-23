import {getCellOnBoard} from './getCellOnBoard.js'

export function possibleStepPawn(event) {
    const {cell, rows, cellIndex, rowIndex} = getCellOnBoard(event)

    const wasSelected = cell.classList.contains('selectedItem')
    cell.classList.toggle('selectedItem');

    if (wasSelected) {
        document.querySelectorAll('.possibleStep').forEach(el => { el.classList.remove('possibleStep') })
    } else {
        if (cell.classList.contains('selectedItem')) {
            if (cell.querySelector('.black')) {
                BlackPawnSteps(rows, rowIndex, cellIndex)
            } else if (cell.querySelector('.white')) {
                WhitePawnSteps(rows, rowIndex, cellIndex)
            }
        }
    }

    function BlackPawnSteps(rows, rowIndex, cellIndex) {
        const next1RowBlack = rows[rowIndex + 1]
        const next2RowBlack = rows[rowIndex + 2]
        const next1CellBlack = next1RowBlack.children[cellIndex]
        const next2CellBlack = next2RowBlack.children[cellIndex]

        next1CellBlack.classList.add('possibleStep')
        next2CellBlack.classList.add('possibleStep')
    }

    function WhitePawnSteps(rows, rowIndex, cellIndex) {
        const next1RowWhite = rows[rowIndex - 1]
        const next2RowWhite = rows[rowIndex - 2]
        const next1CellWhite = next1RowWhite.children[cellIndex]
        const next2CellWhite = next2RowWhite.children[cellIndex]

        next1CellWhite.classList.add('possibleStep')
        next2CellWhite.classList.add('possibleStep')
    }
}