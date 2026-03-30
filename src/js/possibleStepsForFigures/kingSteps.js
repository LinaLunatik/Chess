import { MOVE_TYPES, ROOK_SIDE } from "../const.js"
import { isCastlingValid } from "../game/isCastlingValid.js"
import { isOnChessBoard } from "../game/isOnChessBoard.js"
import { getCell } from "../game/state.js"

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
    const { figure, color: currentColor } = getCell({ row, col })

    if (!figure) return []

    directions.forEach(([rowDir, colDir]) => {
        const targetRow = row + rowDir;
        const targetCol = col + colDir;

        if (isOnChessBoard(targetRow, targetCol)) {
            const targetCell = getCell({ row: targetRow, col: targetCol })
            const { figure: targetFigure, color: targetColor } = targetCell

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