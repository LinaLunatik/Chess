import { getState, setState } from "./state.js"

export const moveFigure = (targetRow, targetCol) => {

    const newState = {
        ...currentState,
        selectedFigure: { row, col },
        possibleSteps: steps
    }
    return newState
}