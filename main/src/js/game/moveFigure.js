import {
    clearPossibleSteps,
    clearSelectedCell,
    getState,
    setBoard,
    setCapturedFigures,
    setCastlingRights,
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

    // если рокировка
    const moveDetails = state.possibleSteps.find(step =>
        step.row === row && step.col === col
    )
    const newCastlingRights = {
        white: { ...state.castlingRights.white },
        black: { ...state.castlingRights.black }
    }
    if (moveDetails?.type === MOVE_TYPES.castling) {
        const rookFromCell = newBoard[moveDetails.rookFrom.row][moveDetails.rookFrom.col]
        const rookToCell = newBoard[moveDetails.rookTo.row][moveDetails.rookTo.col]

        const newRookCell = setCell(rookToCell, rookFromCell)
        newBoard[moveDetails.rookTo.row][moveDetails.rookTo.col] = newRookCell
        clearCell(rookFromCell)

        newCastlingRights[fromCell.color][moveDetails.rookSide] = false
    }

    // Если король или ладья сделали ход, право на рокировку отключается
    if (fromCell.figure === FIGURES.king) {
        newCastlingRights[fromCell.color][ROOK_SIDE.kingSide] = false
        newCastlingRights[fromCell.color][ROOK_SIDE.queenSide] = false
    }
    if (fromCell.figure === FIGURES.rook) {
        const rookSide = getRookSide(fromCell.col)
        if (rookSide) {
            newCastlingRights[fromCell.color][rookSide] = false
        }
    }
    // Если съедена ладья, право на рокировку отключается
    if (targetCell.figure === FIGURES.rook) {
        const rookSide = getRookSide(targetCell.col)
        if (rookSide) {
            newCastlingRights[targetCell.color][rookSide] = false
        }
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
    setCastlingRights(newCastlingRights)
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