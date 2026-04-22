import { MOVE_TYPES, ROOK_SIDE } from "../const.js"
import { isCastlingValid } from "../game/isCastlingValid.js"
import { isOnChessBoard } from "../game/isOnChessBoard.js"
import { getCell } from "../game/state.js"

/**
 * Выполняет расчет возможных ходов короля. 
 * Король ходит на 1 клетку в любом направлении. 
 * Король может делать короткую (король → +2 по горизонтали) или длинную (король → -2) 
 * рокировку с ладьей. 
 * 
 * @param {Object} state - Текущее состояние игры
 * @param {number} row - Текущая координата строки короля
 * @param {number} col - Текущая координата столбца короля
 * @returns {Array<{
    * row: number, 
    * col: number, 
    * type: 'step' | 'capture' | 'castling',
    * rookSide?: 'queenSide' | 'kingSide',
    * rookFrom?: {row: number, col: number},
    * rookTo?: {row: number, col: number}
 * }>} - Массив возможных ходов. Для обычных ходов используются поля {row, col, type}.
 * Для рокировки добавляются поля rookSide, rookFrom, rookTo.
 */

export const kingSteps = (state, row, col) => {
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

    let moves = []
    const { figure, color: currentColor } = getCell({row, col})

    if (!figure) return []

    directions.forEach(([rowDir, colDir]) => {
        const targetRow = row + rowDir;
        const targetCol = col + colDir;

        if (isOnChessBoard(targetRow, targetCol)) {
            const targetCell = getCell({row: targetRow, col: targetCol})
            const {figure: targetFigure, color: targetColor} = targetCell
            
            //если клетка пуста, можно идти
            if (targetFigure === null) {
                moves.push({
                    row: targetRow,
                    col: targetCol,
                    type: MOVE_TYPES.step
                })
            }

            //если клетка занята фигурой чужого цвета, съесть, потом стоп
            else if (targetColor !== currentColor) {
                moves.push({
                    row: targetRow,
                    col: targetCol,
                    type: MOVE_TYPES.capture
                })
            }
        }
    })

    // Короткая рокировка
    // При короткой рокировке король делает 2 шага вправо по горизонтали (col + 2).
    // Ладья делает 2 шага влево по той же горизонтали.
    // Ладья до рокировки (col + 3), ладья после рокировки (col + 1).

    if (state.castlingRights[currentColor][ROOK_SIDE.kingSide]) {
        const canCastle = isCastlingValid(state, currentColor, ROOK_SIDE.kingSide)
        if (canCastle) {
            moves.push({
                row: row,
                col: (col + 2),
                type: MOVE_TYPES.castling,
                rookSide: ROOK_SIDE.kingSide,
                rookFrom: { row: row, col: (col + 3) },
                rookTo: { row: row, col: (col + 1) }
            })
        }
    }

    // Длинная рокировка
    // При длинной рокировке король делает 2 шага влево по горизонтали.
    // Ладья делает 3 шага вправо по той же горизонтали.
    // Ладья до рокировки (col - 4), ладья после рокировки (col - 1).

    if (state.castlingRights[currentColor][ROOK_SIDE.queenSide]) {
        const canCastle = isCastlingValid(state, currentColor, ROOK_SIDE.queenSide)
        if (canCastle) {
            moves.push({
                row: row,
                col: (col - 2),
                type: MOVE_TYPES.castling,
                rookSide: ROOK_SIDE.queenSide,
                rookFrom: { row: row, col: (col - 4) },
                rookTo: { row: row, col: (col - 1) }
            })
        }
    }
    return moves
}