export const findAllFiguresByColor = (state, isBlack) => {
    const result = []
    for (let row = 0; row < state.board.length; row++) {
        for (let col = 0; col < state.board[row].length; col++) {
            const cell = state.board[row][col]
            if (cell.isBlack === isBlack) {
                result.push({figure: cell.figure, row, col})
            }
        }
    }
    return result
}