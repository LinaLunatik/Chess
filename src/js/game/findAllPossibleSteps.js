import { possibleStepsMap } from "../const.js"

export const findAllPossibleSteps = (state, figures) => {
        
    const allSteps = []
    
        for (let figure of figures) {
            const { figure: figureType, row, col } = figure
            const getSteps = possibleStepsMap[figureType]
    
            if (getSteps) {
                const steps = getSteps(state, row, col)
                allSteps.push(...steps)
            }
        }
    return allSteps
}