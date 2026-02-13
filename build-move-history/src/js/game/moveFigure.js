import { 
    clearPossibleSteps, 
    clearSelectedCell, 
    getState, 
    moveToCell, 
    setBoard, 
    setCapturedFigures, 
    moveToCell, 
    setMoveHistory} from "./state.js"
import { createChessBoard } from "./createChessBoard.js"
import { clearCell } from "./clearCell.js"
import { MOVE_TYPES } from "../const.js"

export const moveFigure = (cell) => {
    const {row, col} = cell
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
    const newMoveHistory = [
        ...state.moveHistory
    ]
    
    let moveType = MOVE_TYPES.move

    //если клетка назначения занята чужой фигурой
    if (targetCell.figure !== null) {
        newCapturedFigures[
            targetCell.isBlack ? 'black' : 'white'
        ].push(targetCell.figure)

        moveType = MOVE_TYPES.capture
    }

    newBoard[row][col] = moveToCell(targetCell, fromCell)
    
    newMoveHistory.push({
        figure: fromCell.figure,
        targetCell: {row, col},
        type: moveType
    })

    clearCell(fromCell)

    setBoard(newBoard)
    clearSelectedCell()
    clearPossibleSteps()
    setCapturedFigures(newCapturedFigures)
    setMoveHistory(newMoveHistory)

    createChessBoard()
}
