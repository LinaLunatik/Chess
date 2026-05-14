import { createChessBoard } from "./createChessBoard.js"
import { getInitialState } from "./getInitialState.js"
import { getUndoStack, setState } from "./state.js"

export const resetGame = () => {
    const freshState = getInitialState()
    setState(freshState)
    getUndoStack().length = 0
    createChessBoard()
}