import { MOVE_TYPES } from "../const.js"
import { isOnChessBoard } from "../game/isOnChessBoard.js"

export const getPawnSteps = ({ isBlack }) => {

    const pawnSteps = (state, row, col) => {

        const forwardDirections = [[1, 0]]
        const diagonalDirections = [[1, -1], [1, 1]]
        //только для начальной позиции
        const firstStepDirections = [[2, 0]]

        let moves = []
        // Определяем направление движения и начальную строку на основе цвета
        const step = isBlack ? 1 : -1
        const startRow = isBlack ? 1 : 6

        // Проверяем, находится ли пешка на начальной позиции для двойного хода
        if (row === startRow) {

            firstStepDirections.forEach(([rowDir, colDir]) => {
                const targetRow = row + rowDir * step;
                const targetCol = col + colDir;

                if (isOnChessBoard(targetRow, targetCol)) {

                    const middleRow = row + step
                    const middleCell = state.board[middleRow][col]
                    const targetCell = state.board[targetRow][targetCol]

                    //если клетка пуста, можно идти
                    if (targetCell.figure === null &&
                        middleCell.figure === null) {
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
                const targetCell = state.board[targetRow][targetCol]
                //если клетка пуста, можно идти
                if (targetCell.figure === null) {
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
                const targetCell = state.board[targetRow][targetCol]
                //если клетка занята фигурой другого цвета
                if (targetCell.figure !== null &&
                    targetCell.isBlack !== isBlack
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
