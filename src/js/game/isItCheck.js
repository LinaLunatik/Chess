import { findKingCell } from "./findKingCell.js"
import { findAllFiguresByColor } from "./findAllFiguresByColor.js"
import { possibleStepsMap } from "../const.js"

export const isItCheck = (state) => {

    const kingCell = findKingCell(state, !isCurrentPlayerWhite)

    const allCurrentFigures = findAllFiguresByColor(state, state.isCurrentPlayerWhite)
    const allSteps = []

    for (let figure of allCurrentFigures) {
        const { figure: figureType, row, col } = figure
        const getSteps = possibleStepsMap[figureType]

        if (getSteps) {
            const steps = getSteps(state, row, col)
            allSteps.push(...steps)
        }
    }

    const isKingInDanger = allSteps.some(step =>
        step.row === kingCell.row &&
        step.col === kingCell.col
    )

    return isKingInDanger
}