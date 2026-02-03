import { getState, setState } from "./state.js"
import { createChessBoard } from "./createChessBoard.js"

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

    //если клетка назначения занята чужой фигурой
    if (currentCell.figure !== null) {
        if (currentCell.isBlack) {
            currentState.capturedBlackFigures.push(currentCell.figure)
        }
        else {
            currentState.capturedWhiteFigures.push(currentCell.figure)
        }
    }

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
    createChessBoard()
}
