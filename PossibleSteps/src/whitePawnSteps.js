export const whitePawnSteps = (rows, rowIndex, cellIndex) => {
        const next1RowWhite = rows[rowIndex - 1]
        const next2RowWhite = rows[rowIndex - 2]
        const next1CellWhite = next1RowWhite.children[cellIndex]
        const next2CellWhite = next2RowWhite.children[cellIndex]

        next1CellWhite.classList.add('possibleStep')
        next2CellWhite.classList.add('possibleStep')
    }
