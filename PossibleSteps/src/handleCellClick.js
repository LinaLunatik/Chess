import { lightPossibleSteps } from './lightPossibleSteps.js'

export const handleCellClick = (event) => {
    const cell = event.currentTarget

    const figures = ['rook', 'knight', 'bishop', 'queen', 'king', 'blackPawn', 'whitePawn']

    for (let figure of figures) {
        if (cell.querySelector('.' + figure)) {
            lightPossibleSteps(figure, event)
        }
    }

}