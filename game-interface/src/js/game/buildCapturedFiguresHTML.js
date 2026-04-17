import { FIGURE_IMAGE_PATH, STYLES } from "../const.js"

const renderCapturedGroup = (capturedFigures, color) =>
    capturedFigures
        .filter(fig => FIGURE_IMAGE_PATH[fig]?.[color])
        .map(fig => {
            const src = FIGURE_IMAGE_PATH[fig]?.[color]
            return `<img 
                        src="${src}" 
                        alt="${fig}" 
                    >`
        })
        .join(' ')

export const buildCapturedFiguresHTML = (state) => {
    const {
        white: whiteCapFig,
        black: blackCapFig
    } = state.capturedFigures

    const whiteImages = renderCapturedGroup(whiteCapFig, 'white')
    const blackImages = renderCapturedGroup(blackCapFig, 'black')

    return `
                <div class="${STYLES.capturedContainer}">
                <h3>Съеденные фигуры</h3>
                    <div class="${STYLES.capturedSection}">${whiteImages}</div>
                    <div class="${STYLES.capturedSection}">${blackImages}</div>
                </div>
            `
}