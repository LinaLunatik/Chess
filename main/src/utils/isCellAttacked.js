import { COLORS, FIGURES } from "../js/const.js"
import { isOnChessBoard } from "../js/game/isOnChessBoard.js"
import { getCell } from "../js/game/state.js"

export const isCellAttacked = (state, row, col, attackingColor) => {
    // Хелперы использует замыкание
    // 1. Проверяет атаку пешками
    const checkPawnAttacks = (pawnAttacks, expectedPawnFigure) => {
        for (let { row: attackerRow, col: attackerCol } of pawnAttacks) {
            // Если клетка вне доски, пропускаем
            if (!isOnChessBoard(attackerRow, attackerCol)) continue

            const attackerCell = getCell({ row: attackerRow, col: attackerCol })

            if (
                attackerCell.figure === expectedPawnFigure &&
                attackerCell.color === attackingColor
            ) return true
        }
        return false
    }
    // 2. Проверяет атаку со смещением (конь, король)
    const checkOffsetAttacks = (offsets, figure) => {
        for (let [rowDir, colDir] of offsets) {
            const attackerRow = row + rowDir
            const attackerCol = col + colDir
            // Если клетка вне доски, пропускаем
            if (!isOnChessBoard(attackerRow, attackerCol)) continue

            const attackerCell = getCell({ row: attackerRow, col: attackerCol })

            if (
                attackerCell.figure === figure &&
                attackerCell.color === attackingColor
            ) return true
        }
        return false
    }
    // 3. Проверяет атаку "лучом" (слон, ладья, ферзь)
    const checkRayAttacks = (rayDirs, figure) => {
        for (let [rowDir, colDir] of rayDirs) {
            let attackerRow = row + rowDir
            let attackerCol = col + colDir
            // Идём «лучом», пока не упремся в край доски или в фигуру
            while (isOnChessBoard(attackerRow, attackerCol)) {
                const attackerCell = getCell({ row: attackerRow, col: attackerCol })

                if (attackerCell.figure !== null) {
                    // Если встретилась фигура нужного цвета и это ладья/ферзь
                    if (
                        attackerCell.color === attackingColor &&
                        attackerCell.figure === figure
                    ) return true
                    // Любая другая фигура блокирует луч
                    break
                }
                attackerRow += rowDir
                attackerCol += colDir
            }
        }
        return false
    }

    // === Проверяем атаку пешками ===
    const pawnDirection = attackingColor === COLORS.WHITE ? 1 : -1
    const pawnAttacks = [
        { row: row + pawnDirection, col: col + 1 },
        { row: row + pawnDirection, col: col - 1 }
    ]
    const expectedPawnFigure = attackingColor === COLORS.WHITE ?
        FIGURES.whitePawn :
        FIGURES.blackPawn
    if (checkPawnAttacks(pawnAttacks, expectedPawnFigure)) return true

    // === Проверяем атаку со смещением (конь, король) ===
    const knightAttacks = [
        [-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2]
    ]
    const kingAttacks = [
        [-1, -1], [-1, 1], [1, -1], [1, 1], [-1, 0], [0, -1], [0, 1], [1, 0]
    ]

    if (checkOffsetAttacks(knightAttacks, FIGURES.knight)) return true
    if (checkOffsetAttacks(kingAttacks, FIGURES.king)) return true

    // === Проверяем атаку "лучом" (ладья, ферзь, слон) ===
    const rookAttacks = [
        [-1, 0], [0, 1], [1, 0], [0, -1]
    ]
    const bishopAttacks = [
        [-1, -1], [-1, 1], [1, 1], [1, -1]
    ]
    const queenAttacks = [
        [-1, 0], [0, 1], [1, 0], [0, -1], [-1, -1], [-1, 1], [1, 1], [1, -1]
    ]

    if (checkRayAttacks(rookAttacks, FIGURES.rook)) return true
    if (checkRayAttacks(bishopAttacks, FIGURES.bishop)) return true
    if (checkRayAttacks(queenAttacks, FIGURES.queen)) return true
    return false
}