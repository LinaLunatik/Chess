import { lightPossibleSteps } from './lightPossibleSteps.js'
import { NAMES } from './const.js'

export const handleCellClick = (event) => {
    const cell = event.currentTarget

    const figures = [
        NAMES.rook, 
        NAMES.knight, 
        NAMES.bishop, 
        NAMES.queen, 
        NAMES.king, 
        NAMES.blackPawn,
        NAMES.whitePawn
    ]

    for (let figure of figures) {
        if (cell.querySelector('.' + figure)) {
            lightPossibleSteps(figure, event)
        }
    }

}