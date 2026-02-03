import { getState, setState } from "./state.js"
import { buildChessBoardHTML } from './buildChessBoardHTML.js'
import { displayChessBoard } from "./displayChessBoard.js"
import { attachEventListeners } from "./attachEventListeners.js"

export const moveFigure = (row, col) => {
    const currentState = getState()

    if (!currentState.selectedCell) {
        console.error('Нет выбранной клетки');
        return;
    }

    const { row: fromRow, col: fromCol } = currentState.selectedCell

    const newBoard = currentState.board.map(
        row => row.map(
            cell => ({ ...cell })
        ))

    const currentCell = newBoard[row][col]
    const fromCell = newBoard[fromRow][fromCol]

    currentCell.figure = fromCell.figure
    currentCell.isBlack = fromCell.isBlack

    fromCell.figure = null
    fromCell.isBlack = null

    const newState = {
        ...currentState,
        board: newBoard,
        selectedCell: null,
        possibleSteps: []
    }
    
    setState(newState)

    const html = buildChessBoardHTML(newState)
                displayChessBoard(html)
                attachEventListeners()
}
