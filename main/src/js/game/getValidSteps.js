import { isMoveLegalUnderCheck } from "./isMoveLegalUnderCheck.js"

export const getValidSteps = (state, figureSteps, figureCell) => {
    const figureColor = state.board[figureCell.row][figureCell.col].color
    if (!figureColor) return []

    return figureSteps.filter(step => 
        isMoveLegalUnderCheck(state, figureCell, step, figureColor)
    )
}