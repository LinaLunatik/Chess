import { possibleStepsMap } from "../const.js"
import { getValidSteps } from "./getValidSteps.js"

export const findAllPossibleSteps = (state, figures) => {

    const allSteps = []

    for (let figure of figures) {
        const { figure: figureType, row, col } = figure
        const figureCell = {row, col}

        const getSteps = possibleStepsMap[figureType]

        if (getSteps) {
            const geometricSteps = getSteps(state, row, col)
            const validSteps = getValidSteps(state, geometricSteps, figureCell)
            allSteps.push(...validSteps)
        }
    }
    return allSteps
}