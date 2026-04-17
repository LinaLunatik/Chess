import { STYLES, FIGURE_IMAGE_PATH, SYMBOLS } from "../const.js"
import { convertToChessCoords } from "./convertToChessCoords.js"

export const buildMoveHistoryHTML = (state) => {
    const moves = state.moveHistory
    
    const movedItems = []

    for (let { figure, color, targetCell, type } of moves) {
        let imgTag = null

        if (figure && color) {
            const src = FIGURE_IMAGE_PATH[figure][color];
            if (src) {
                imgTag = `<img 
                        src="${src}" 
                        alt="${figure}" 
                        class="${STYLES.figuresInHistory}"
                    >`;
            }
        }

        const chessCoords = convertToChessCoords(targetCell.row, targetCell.col)
        const typeSymbol = SYMBOLS[type]

        movedItems.push(`
            <span class="${STYLES.moveItem}">
                ${imgTag || ''}${typeSymbol}${chessCoords}
            </span>
        `) 
    }

    return `
                <div class="${STYLES.moveHistory}">
                    <h3>История ходов</h3>
                    <div class="${STYLES.moveList}">
                        ${movedItems.join('')}
                    </div>
                </div>
            `
}