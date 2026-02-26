import { FIGURES, possibleStepsMap } from "../const.js"
import { getValidStepsKing } from "./getValidStepsKing.js"

export const findAllPossibleSteps = (state, figures) => {

    const allSteps = []

    for (let figure of figures) {
        const { figure: figureType, row, col } = figure
        //проверка шагов короля на шах
        if (figureType === FIGURES.king) {

            const getKingSteps = possibleStepsMap[FIGURES.king]
            const stepsKing = getKingSteps(state, row, col)
            const kingCell = {row, col}

            const validStepsKing = getValidStepsKing(state, stepsKing, kingCell)

            allSteps.push(...validStepsKing)

        } else {
            //остальные фигуры      
            const getSteps = possibleStepsMap[figureType]

            if (getSteps) {
                const steps = getSteps(state, row, col)
                allSteps.push(...steps)
            }
        }
    }
    return allSteps
}