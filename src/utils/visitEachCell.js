/**
 * Обходит каждую клетку доски и вызывает колбэк для неё.
 * 
 * Параметры:
 * state - Текущее состояние игры
 * callback - Функция, которая выполнится для каждой клетки
 */
export const visitEachCell = (state, callback) => {
    for (let row = 0; row < state.board.length; row++) {
        for (let col = 0; col < state.board[row].length; col++) {
            const cell = state.board[row][col]
            callback(cell, row, col)
        }
    }
}