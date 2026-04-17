import {
    clearPossibleSteps,
    clearSelectedCell,
    getState,
    setBoard,
    setCapturedFigures,
    setCell
} from "./state.js"
import { createChessBoard } from "./createChessBoard.js"
import { clearCell } from "./clearCell.js"
import { toggleCurrentPlayer } from "./toggleCurrentPlayer.js"
import { getOppositeColor } from "../../utils/getOppositeColor.js"
import { promotePawn } from "./promotePawn.js"
import { isItLastRowForPawn } from "./isItLastRowForPawn.js"
import { GAME_STATUS } from "../const.js"
import { getGameStatus } from "./getGameStatus.js"

export const moveFigure = async (cell) => {
    const { row, col } = cell
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
    const opponentColor = getOppositeColor(fromCell.color)

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
        newCapturedFigures[targetCell.color].push(targetCell.figure)
    }

    newBoard[row][col] = moveToCell(targetCell, fromCell)
    
    newMoveHistory.push({
        figure: fromCell.figure,
        color: fromCell.isBlack ? 'black' : 'white',
        targetCell: {row, col},
        type: moveType
    })

    clearCell(fromCell)

    if (isItLastRowForPawn(newBoard[row][col].figure, row)) {
        await promotePawn(newBoard, targetCell)
    }

    setBoard(newBoard)

    clearSelectedCell()
    clearPossibleSteps()
    setCapturedFigures(newCapturedFigures)
    setMoveHistory(newMoveHistory)

    const newState = getState()
    const gameStatus = getGameStatus(newState, opponentColor)

    switch (gameStatus) {
        case GAME_STATUS.checkmate:
            alert('МАТ')
            break;
        case GAME_STATUS.stalemate:
            alert('ПАТ')
            break;
        case GAME_STATUS.check:
            console.log('ШАХ')
            break;
        case GAME_STATUS.continue:
            toggleCurrentPlayer()
            createChessBoard()
            break;
        default:
            console.error('Неизвестный статус игры', gameStatus)
            break
    }
}
