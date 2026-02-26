import { setCell } from "./state.js"
import { clearCell } from "./clearCell.js"
import { isItCheck } from "./isItCheck.js"

export const getValidStepsKing = (state, stepsKing, kingCell) => {
    
    let validStepsKing = []

    for (let step of stepsKing) {
        //на копии доски для каждого шага проверяем , 
        //окажется ли король под шахом
        const newBoard = state.board.map(
            row => row.map(
                cell => ({ ...cell })
            )
        )
        const fromCell = newBoard[kingCell.row][kingCell.col]
        const targetCell = newBoard[step.row][step.col]

        if (!fromCell.figure) continue 
        const colorOfKing = fromCell.color

        newBoard[step.row][step.col] = setCell(targetCell, fromCell)
        clearCell(fromCell)
        const newState = {
            ...state,
            board: newBoard
        }
        if (!isItCheck(newState, colorOfKing)) {
            validStepsKing.push(step)
        }
    }
    return validStepsKing
}