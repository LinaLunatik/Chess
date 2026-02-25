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
import { isItCheck } from "./isItCheck.js"
import { COLORS } from "../const.js"

export const moveFigure = (cell) => {
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
    const opponentColor = fromCell.isBlack ? COLORS.WHITE : COLORS.BLACK

    const newCapturedFigures = {
        ...state.capturedFigures,
        black: [...state.capturedFigures.black],
        white: [...state.capturedFigures.white]
    }

    //если клетка назначения занята чужой фигурой
    if (targetCell.figure !== null) {
        newCapturedFigures[
            targetCell.isBlack ? COLORS.BLACK : COLORS.WHITE
        ].push(targetCell.figure)
    }

    newBoard[row][col] = setCell(targetCell, fromCell)

    clearCell(fromCell)

    setBoard(newBoard)
    clearSelectedCell()
    clearPossibleSteps()
    setCapturedFigures(newCapturedFigures)
    if (isItCheck(state, opponentColor)) {
        //здесь будет подключаться подсветка короля под шахом
        alert('ШАХ')
    }

    //здесь будет проверка на мат
    toggleCurrentPlayer()

    createChessBoard()
}
