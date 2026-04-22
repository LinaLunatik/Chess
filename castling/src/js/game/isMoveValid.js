import { isSameCell } from "./isSameCell.js"

export const isMoveValid = (currentState, cell) => {
    return (
        currentState.selectedCell &&
        currentState.possibleSteps.some(step =>
            isSameCell(step, cell)
            ))
}