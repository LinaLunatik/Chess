import { moveToCell } from "./state.js"
import { clearCell } from "./clearCell.js"
import { isInCheck } from "./isInCheck.js"

export const getValidSteps = (state, figureSteps, figureCell) => {
    
    let validSteps = []
    const figureColor = state.board[figureCell.row][figureCell.col].color
    if (!figureColor) return []

    for (let step of figureSteps) {
        // на копии доски для каждого шага проверяем , 
        // окажется ли король под шахом
        const newBoard = state.board.map(
            row => row.map(
                cell => ({ ...cell })
            )
        )
        // переставляем фигуру на копии доски для симуляции хода
        const fromCell = newBoard[figureCell.row][figureCell.col]
        const targetCell = newBoard[step.row][step.col]
    
        newBoard[step.row][step.col] = moveToCell(targetCell, fromCell)
        clearCell(fromCell)
        
        const newState = {
            ...state,
            board: newBoard
        }
        // в новом состоянии проверяем короля на шах
        if (!isInCheck(newState, figureColor)) {
            validSteps.push(step)
        }
    }
    return validSteps
}