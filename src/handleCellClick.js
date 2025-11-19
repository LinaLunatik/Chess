import { lightPossibleSteps } from './lightPossibleSteps.js'
import { NAMES } from './const.js'

export const handleCellClick = (cell) => {

    const figures = Object.values(NAMES)

    for (let figure of figures) {
        console.log('Найдена фигура', figure)
        if (cell.querySelector('.' + figure)) {
            lightPossibleSteps(figure, event)
        }
    }

}