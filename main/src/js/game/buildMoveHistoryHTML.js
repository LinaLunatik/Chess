import { STYLES, FIGURE_IMAGE_PATH, SYMBOLS, MOVE_TYPES } from "../const.js"
import { convertToChessCoords } from "./convertToChessCoords.js"

export const buildMoveHistoryHTML = (state) => {
    const moves = state.moveHistory
    
    const movedItems = []

    for (let { figure, color, fromCell, targetCell, type } of moves) {
        let imgTag = ''

        if (figure && color) {
            const src = FIGURE_IMAGE_PATH[figure][color];
            if (src) {
                imgTag = `<img 
                        src="${src}" 
                        alt="${figure}" 
                        class="${STYLES.chessFigure}"
                    >`;
            }
        }

        const chessCoords = convertToChessCoords(targetCell.row, targetCell.col)
        let typeSymbol = SYMBOLS[type] || ''

        if (type === MOVE_TYPES.enPassant) {
            const fromCellCoords = convertToChessCoords(fromCell.row, fromCell.col)
            typeSymbol = fromCellCoords[0] + SYMBOLS.capture
        }

        movedItems.push(`
            <span class="${STYLES.moveHistory.item}">
                ${imgTag}${typeSymbol}${chessCoords}
            </span>
        `) 
    }

    return `
                <div class="${STYLES.moveHistory.container}">
                    <h3 class="${STYLES.panelTitle}">История ходов</h3>
                    <div class="${STYLES.moveHistory.list}">
                        ${movedItems.join('')}
                    </div>
                </div>
            `
}