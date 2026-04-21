/**
 * Возвращает массив клеток между королем и ладьей на одной горизонтали.
 * Используется для проверки свободного пути при рокировке.
 * Возвращает пустой массив, если король и ладья на разных горизонталях.
 * 
 * @param {{row: number, col: number}} kingCell - Координаты ячейки короля
 * @param {{row: number, col: number}} rookCell - Координаты ячейки ладьи
 * @returns {Array<{row: number, col: number}>} - Массив промежуточных клеток
 */

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