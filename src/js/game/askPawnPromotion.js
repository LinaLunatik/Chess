import { FIGURE_IMAGE_PATH, FIGURES, STYLES } from "../const.js"

export const askPawnPromotion = (color) => {
    
    return new Promise(resolve => {
        const modal = document.createElement('div')
        modal.classList.add(STYLES.modalPromotion)

        const options = [
            { value: FIGURES.queen, content: 'Ферзь' },
            { value: FIGURES.bishop, content: 'Слон' },
            { value: FIGURES.knight, content: 'Конь' },
            { value: FIGURES.rook, content: 'Ладья' }
        ]
        options.forEach(opt => {
            const option = document.createElement('div')
            option.dataset.value = opt.value

            const img = document.createElement('img')
            img.src = FIGURE_IMAGE_PATH[opt.value][color]
            img.alt = opt.content
            img.classList.add(STYLES.modalButton)

            option.appendChild(img)
            modal.appendChild(option)
        })
        document.body.appendChild(modal)

        modal.addEventListener('click', (event) => {
            const clickedOption = event.target.closest('[data-value]')
            if (!clickedOption) return
            
            const chosenFigure = clickedOption.dataset.value
            resolve(chosenFigure)
            modal.remove()
        })
    })
}