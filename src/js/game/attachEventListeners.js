import { ID_IN_HTML } from "../const.js"
import { handleCellClick } from "./handleCellClick.js"
import { resetGame } from "./resetGame.js"
import { getState, getUndoStack } from "./state.js"
import { undoLastMove } from "./undoLastMove.js"

export const attachEventListeners = () => {

    const root = document.getElementById(ID_IN_HTML.root)
    const table = root.querySelector('table')

    if (table) {
        table.addEventListener('click', (event) => {
            const targetCell = event.target.closest('td')

            const rowString = targetCell.dataset.row
            const colString = targetCell.dataset.col

            if (
                rowString === undefined ||
                colString === undefined
            ) {
                console.warn(
                    'Не найдены data-атрибуты row или col на элементе:', targetCell)
                return
            }

            const row = +rowString
            const col = +colString

            const currentState = getState()
            const cell = currentState.board[row][col]

            handleCellClick(cell)
        })
    }

    const btnReset = document.getElementById(ID_IN_HTML.btnReset)
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            if (confirm('Вы уверены? Текущая партия будет сброшена')) {
                resetGame()
            }
        })
    }
    const btnUndo = document.getElementById(ID_IN_HTML.btnUndo)
    if (btnUndo) {
        btnUndo.addEventListener('click', undoLastMove)
        btnUndo.disabled = (getUndoStack().length === 0)
    }
}