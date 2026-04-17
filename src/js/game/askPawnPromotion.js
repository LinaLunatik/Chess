import { 
    FIGURE_IMAGE_PATH, 
    FIGURES, 
    FIGURES_RU_NAMES, 
    STYLES 
} from "../const.js"

export const askPawnPromotion = (color) => {
    
    return new Promise(resolve => {
        const modal = document.createElement('div')
        modal.classList.add(STYLES.modalPromotion)

        const options = [
            { value: FIGURES.queen, content: FIGURES_RU_NAMES.queen },
            { value: FIGURES.bishop, content: FIGURES_RU_NAMES.bishop },
            { value: FIGURES.knight, content: FIGURES_RU_NAMES.knight },
            { value: FIGURES.rook, content: FIGURES_RU_NAMES.rook }
        ]
        options.forEach(opt => {
            const option = document.createElement('div')
            option.id = opt.value
            option.classList.add(STYLES.promotionOption)

            const img = document.createElement('img')
            img.src = FIGURE_IMAGE_PATH[opt.value][color]
            img.alt = opt.content
            img.classList.add(STYLES.modalButton)

            option.appendChild(img)
            modal.appendChild(option)
        })
        document.body.appendChild(modal)

        modal.addEventListener('click', (event) => {
            const clickedOption = event.target.closest(`.${STYLES.promotionOption}`)
            if (!clickedOption || !clickedOption.id) return
            
            const chosenFigure = clickedOption.id
            resolve(chosenFigure)
            modal.remove()
        })
    })
}