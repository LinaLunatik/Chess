import { possibleStepsMap } from "../const.js"

export const findAllGeometricSteps = (state, figures) => {

    const allSteps = []

    for (let figure of figures) {
        const { figure: figureType, row, col } = figure
        const getSteps = possibleStepsMap[figureType]

        if (getSteps) {
            const geometricSteps = getSteps(state, row, col)
            allSteps.push(...geometricSteps)
        }
    }
    return allSteps
}