export const isMoveValid = (currentState, cell) => {
    const {row, col} = cell
    return (
        currentState.selectedCell &&
        currentState.possibleSteps.some(step =>
            step.row === row &&
            step.col === col))
}