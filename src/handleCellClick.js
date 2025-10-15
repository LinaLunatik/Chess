import { possibleStep } from './possibleStep.js'

export const handleCellClick = (event) => {
    const cell = event.currentTarget

    const figures = ['rook', 'knight', 'bishop', 'queen', 'king', 'pawn']

    for (let figure of figures) {
        if (cell.querySelector('.' + figure)) {
            possibleStep(figure, event)
        }
    }

}