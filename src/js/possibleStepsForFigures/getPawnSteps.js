import { COLORS, MOVE_TYPES } from "../const.js"
import { isOnChessBoard } from "../game/isOnChessBoard.js"
import { getCell } from "../game/state.js"

export const getPawnSteps = ({ color }) => {

    const pawnSteps = (state, row, col) => {

        const forwardDirections = [[1, 0]]
        const diagonalDirections = [[1, -1], [1, 1]]
        //только для начальной позиции
        const firstStepDirections = [[2, 0]]

        let moves = []
        // Определяем направление движения и начальную строку на основе цвета
        const step = color === COLORS.BLACK ? 1 : -1
        const startRow = color === COLORS.BLACK ? 1 : 6

        // Проверяем, находится ли пешка на начальной позиции для двойного хода
        if (row === startRow) {

            firstStepDirections.forEach(([rowDir, colDir]) => {
                const targetRow = row + rowDir * step;
                const targetCol = col + colDir;

                if (isOnChessBoard(targetRow, targetCol)) {

                    const middleRow = row + step
                    const middleCell = getCell({row: middleRow, col})
                    const targetCell = getCell({row: targetRow, col: targetCol})

                    const {figure: middleFigure} = middleCell
                    const {figure: targetFigure} = targetCell

                    //если клетка пуста, можно идти
                    if (
                        targetFigure === null &&
                        middleFigure === null
                    ) {
                        moves.push({
                            row: targetRow,
                            col: targetCol,
                            type: MOVE_TYPES.step
                        })
                    }
                }
            })
        }
        forwardDirections.forEach(([rowDir, colDir]) => {
            const targetRow = row + rowDir * step;
            const targetCol = col + colDir;

            if (isOnChessBoard(targetRow, targetCol)) {
                const targetCell = getCell({row: targetRow, col: targetCol})
                const { figure: targetFigure } = targetCell

                //если клетка пуста, можно идти
                if (targetFigure === null) {
                    moves.push({
                        row: targetRow,
                        col: targetCol,
                        type: MOVE_TYPES.step
                    })
                }
            }
        })
        diagonalDirections.forEach(([rowDir, colDir]) => {
            const targetRow = row + rowDir * step;
            const targetCol = col + colDir;

            if (isOnChessBoard(targetRow, targetCol)) {
                const targetCell = getCell({row: targetRow, col: targetCol})
                const {figure: targetFigure, color: targetColor} = targetCell
                
                //если клетка занята фигурой другого цвета
                if (
                    targetFigure !== null &&
                    targetColor !== color
                ) {
                    moves.push({
                        row: targetRow,
                        col: targetCol,
                        type: MOVE_TYPES.capture
                    })
                }
            }
        })
        return moves
    }
    return pawnSteps
}
