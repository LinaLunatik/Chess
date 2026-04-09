import { isOnChessBoard } from "./isOnChessBoard.js"
/*
 * Возвращает массив клеток, находящихся на линии атаки между фигурой и королём.
 * 
 * Линия атаки существует, если фигуры находятся на одной горизонтали,
 * вертикали или диагонали (как ходят ладья, слон или ферзь).  
 * Для коня такой линии атаки не существует, т.к. он ходит не по прямой. 
 * 
 * Параметры
 * attackerRow, attackerCol - координаты атакующей фигуры
 * kingRow, kingCol         - координаты короля
 * 
 * Возвращает: 
 * [{row,col}] - массив клеток между фигурой и королём
 *              (не включает клетку атакующего, останавливается перед королём).
 * []          - если атаки нет или координаты совпадают.
 */
export const getAttackLine = (attackerRow, attackerCol, kingRow, kingCol) => {
    // координаты короля и координаты атакующей фигуры не должны совпадать
    if (
        attackerRow === kingRow &&
        attackerCol === kingCol
    ) {
        return []
    }
    
    // считаем разницу координат
    const deltaRow = kingRow - attackerRow
    const deltaCol = kingCol - attackerCol

    // является ли атака линейной? 
    const isLinearAttack = (deltaRow, deltaCol) => {
        const isHorizontal  = deltaRow === 0
        const isVertical    = deltaCol === 0
        const isDiagonal    = Math.abs(deltaRow) === Math.abs(deltaCol)
        
        return isHorizontal || isVertical || isDiagonal
    }

    if (isLinearAttack(deltaRow, deltaCol)) {
        // определяем направление движения
        // дает 1,-1, 0 - знак числа
        const rowDir = Math.sign(deltaRow)
        const colDir = Math.sign(deltaCol)

        let line = []
        // не включаем клетку атакующей фигуры
        let currentRow = attackerRow + rowDir
        let currentCol = attackerCol + colDir

        while (
            (currentRow !== kingRow || currentCol !== kingCol) &&
            isOnChessBoard(currentRow, currentCol)
        ) {
            line.push({ row: currentRow, col: currentCol })
            currentRow = currentRow + rowDir
            currentCol = currentCol + colDir
        }
        return line
    } else {
        return []
    }
}