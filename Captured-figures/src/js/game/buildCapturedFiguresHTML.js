import { FIGURE_IMAGE_PATH, STYLES } from "../const.js"

export const buildCapturedFiguresHTML = (state) => {
    const whiteCapFig = state.capturedFigures.white
    const blackCapFig = state.capturedFigures.black

    const renderCapturedGroup = (capturedFigures, color) => {
        return capturedFigures.map(fig => {
            const src = FIGURE_IMAGE_PATH[fig]?.[color]
            if (src) {
                return `<img 
                        src="${src}" 
                        alt="${fig}" 
                        class="${STYLES.capturedFigures}"
                    >`
            } else {
                return ''
            }
        }).join(' ')
    }

    const whiteImages = renderCapturedGroup(whiteCapFig, 'white')
    const blackImages = renderCapturedGroup(blackCapFig, 'black')

    return `
                <div class=${STYLES.capturedFigures}>
                    <div>Белые ${whiteImages}</div>
                    <div>Черные ${blackImages}</div>
                </div>
            `
}