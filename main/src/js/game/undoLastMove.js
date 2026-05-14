import { createChessBoard } from "./createChessBoard.js"
import { getUndoStack, setState } from "./state.js"

export const undoLastMove = () => {
    const stack = getUndoStack()
    if (stack.length === 0) return

    const previousState = stack.pop()
    setState(previousState)

    createChessBoard()
}