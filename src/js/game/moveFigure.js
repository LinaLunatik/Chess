import { getState, setState } from "./state.js"
import { createChessBoard } from "./createChessBoard.js"
import { clearCell } from "./clearCell.js"

export const moveFigure = (targetCell) => {
    const {row, col} = targetCell
    const state = getState()

    if (!state.selectedCell) {
        console.error('Нет выбранной клетки');
        return;
    }

    const { row: fromRow, col: fromCol } = state.selectedCell

    const newBoard = state.board.map(
        row => row.map(
            cell => ({ ...cell })
        ))

    const targetCell = newBoard[row][col]
    const fromCell = newBoard[fromRow][fromCol]

    const newCapturedFigures = {
        ...state.capturedFigures,
        black: [...state.capturedFigures.black],
        white: [...state.capturedFigures.white]
    }

    //если клетка назначения занята чужой фигурой
    if (targetCell.figure !== null) {
        newCapturedFigures[
            targetCell.isBlack ? 'black' : 'white'
        ].push(targetCell.figure)
    }

    targetCell.figure = fromCell.figure
    targetCell.isBlack = fromCell.isBlack

    clearCell(fromCell)

    const newState = {
        ...state,
        board: newBoard,
        selectedCell: null,
        possibleSteps: [],
        capturedFigures: newCapturedFigures
    }

    setState(newState)
    createChessBoard()
}
