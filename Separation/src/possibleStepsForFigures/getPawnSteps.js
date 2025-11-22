import { isOnChessBoard } from "/src/isOnChessBoard.js"

export const getPawnSteps = ({ isBlack }) => {

    const pawnSteps = (state, row, col) => {

        const forwardDirections = [
            [1, 0]
        ]

        const firstStepDirections = [
            [2, 0] //только для начальной позиции
        ]

        const diagonalDirections = [
            [1, -1],
            [1, 1]
        ]

        let moves = []
        const currentColor = state.board[row][col][0]

        const step = isBlack ? 1 : -1
        const startRow = isBlack ? 1 : 6

        if (startRow === row) {

            firstStepDirections.forEach(([rowDir, colDir]) => {
                const targetRow = row + rowDir * step;
                const targetCol = col + colDir;

                if (isOnChessBoard(targetRow, targetCol)) {
                    const targetCellFigure = state.board[targetRow][targetCol]
                    const middleRow = row + step
                    if (targetCellFigure === '' &&
                        state.board[middleRow][targetCol] === '') { //если клетка пуста, можно идти
                        moves.push({ row: targetRow, col: targetCol, type: 'step' })
                    }
                }
            })
        }
        forwardDirections.forEach(([rowDir, colDir]) => {
            const targetRow = row + rowDir * step;
            const targetCol = col + colDir;

            if (isOnChessBoard(targetRow, targetCol)) {
                const targetCellFigure = state.board[targetRow][targetCol]
                if (targetCellFigure === '') { //если клетка пуста, можно идти
                    moves.push({ row: targetRow, col: targetCol, type: 'step' })
                }
            }
        })
        diagonalDirections.forEach(([rowDir, colDir]) => {
            const targetRow = row + rowDir * step;
            const targetCol = col + colDir;

            if (isOnChessBoard(targetRow, targetCol)) {
                const targetCellFigure = state.board[targetRow][targetCol]
                if (targetCellFigure !== '' &&
                    targetCellFigure[0] !== currentColor
                ) {
                    moves.push({ row: targetRow, col: targetCol, type: 'capture' })
                }
            }
        })
        return moves
    }
    return pawnSteps
}
