import { lightPossibleSteps } from './lightPossibleSteps.js'
import { NAMES } from './const.js'

export const handleCellClick = (event) => {
    const cell = event.currentTarget

    const figures = Object.values(NAMES)

    for (let figure of figures) {
        if (cell.querySelector('.' + figure)) {
            lightPossibleSteps(figure, event)
        }
    }

}