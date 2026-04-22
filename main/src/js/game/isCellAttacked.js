import { findAllFiguresByColor } from "./findAllFiguresByColor.js"
import { findAllGeometricSteps } from "./findAllGeometricSteps.js"

export const isCellAttacked = (state, cell, attackingColor) => {
    const allOpponentFigures = findAllFiguresByColor(state, attackingColor)
    const allOpponentSteps = findAllGeometricSteps(state, allOpponentFigures)

    const isAttacked = allOpponentSteps.some(step => 
        step.row === cell.row &&
        step.col === cell.col
    )

    return isAttacked
}