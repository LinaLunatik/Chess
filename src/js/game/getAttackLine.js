import { isOnChessBoard } from "./isOnChessBoard.js"

export const getAttackLine = (attackerRow, attackerCol, kingRow, kingCol) => {
    //фигура не может атаковать свою же клетку
    if (
        attackerRow === kingRow &&
        attackerCol === kingCol
    ) {
        return []
    }
    
    //считаем разницу координат
    const deltaRow = kingRow - attackerRow
    const deltaCol = kingCol - attackerCol

    //является ли атака линейной? 
    const isLinearAttack = (deltaRow, deltaCol) => {
        const isHorizontal = deltaRow === 0
        const isVertical = deltaCol === 0
        const isDiagonal = Math.abs(deltaRow) === Math.abs(deltaCol)
        if (isHorizontal || isVertical || isDiagonal) {
            return true
        }
        else {
            return false
        }
    }

    if (isLinearAttack(deltaRow, deltaCol)) {
        // определяем направление движения
        // дает 1,-1, 0 - знак числа
        const rowDir = Math.sign(deltaRow)
        const colDir = Math.sign(deltaCol)

        let line = []
        //не включаем клетку атакующей фигуры
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