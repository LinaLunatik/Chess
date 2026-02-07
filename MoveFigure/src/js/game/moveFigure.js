import { getState, setState } from "./state.js"
import { createChessBoard } from "./createChessBoard.js"

export const moveFigure = (targetCell) => {
    const {row, col} = targetCell
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

    const newCapturedFigures = {
        ...currentState.capturedFigures,
        black: [...currentState.capturedFigures.black],
        white: [...currentState.capturedFigures.white]
    }

    //если клетка назначения занята чужой фигурой
    if (currentCell.figure !== null) {
        if (currentCell.isBlack) {
            newCapturedFigures.black.push(currentCell.figure)
        }
        else {
            newCapturedFigures.white.push(currentCell.figure)
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
        possibleSteps: [],
        capturedFigures: newCapturedFigures
    }

    setState(newState)
    createChessBoard()
}
