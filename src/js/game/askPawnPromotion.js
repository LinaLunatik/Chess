import { FIGURES } from "../const.js"

export const askPawnPromotion = (color) => {
    //добавить иконки вместо фигур
    return new Promise(resolve => {
        const select = document.createElement('select')
        const options = [
            { value: FIGURES.queen, content: 'Ферзь' },
            { value: FIGURES.bishop, content: 'Слон' },
            { value: FIGURES.knight, content: 'Конь' },
            { value: FIGURES.rook, content: 'Ладья' }
        ]
        options.forEach(opt => {
            const option = document.createElement('option')
            option.value = opt.value
            option.textContent = opt.content
            select.appendChild(option)
        })
        document.body.appendChild(select)

        select.addEventListener('change', (event) => {
            const chosenFigure = event.target.value
            resolve(chosenFigure)
            select.remove()
        })
    })
}