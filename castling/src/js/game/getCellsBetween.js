export const getCellsBetween = (kingCell, rookCell) => {
    const { kingRow, kingCol } = kingCell
    const { rookRow, rookCol } = rookCell

    if (kingRow !== rookRow) {
        return []
    }

    const deltaCol = rookCol - kingCol
    const colDir = Math.sign(deltaCol)

    let cellsLine = []
    let cellCol = kingCol + colDir

    while (
        cellCol !== rookCol
    ) {
        cellsLine.push({ row: kingRow, col: cellCol })
        cellCol = cellCol + colDir
    }
    return cellsLine
}