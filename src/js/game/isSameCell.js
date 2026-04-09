/**
 * Проверяет, являются ли две клетки одинаковыми.
 * Параметры:
 * cell1 - Первая клетка, {row, col}
 * cell2 - Вторая клетка, {row, col}
 * Возвращает boolean
 * true, если координаты совпадают
 */
export const isSameCell = (cell1, cell2) => {
    return  cell1.row === cell2.row &&
            cell1.col === cell2.col
}