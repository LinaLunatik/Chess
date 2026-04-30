import { STYLES, FIGURE_IMAGE_PATH, SYMBOLS, MOVE_TYPES } from "../const.js"
import { convertToChessCoords } from "./convertToChessCoords.js"

export const buildMoveHistoryHTML = (state) => {
    const moves = state.moveHistory
    
    const movedItems = []

    for (const move of moves) {
        const { figure, color, fromCell, targetCell, rookSide, type } = move
        
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

        let targetCoords = convertToChessCoords(targetCell.row, targetCell.col)
        let notation = ''
        
        if (type === MOVE_TYPES.enPassant) {
            const fromCellCoords = convertToChessCoords(fromCell.row, fromCell.col)
            const typeSymbol = fromCellCoords[0] + SYMBOLS.capture
            notation = imgTag + typeSymbol + targetCoords
        } else if (type === MOVE_TYPES.castling) {
            const typeSymbol = SYMBOLS.castling[rookSide]
            notation = typeSymbol
        } else {
            const typeSymbol = SYMBOLS[type]
            notation = imgTag + typeSymbol + targetCoords
        }

        let suffix = ''
        if (move.isCheck) suffix = SYMBOLS.check
        if (move.isCheckmate) suffix = SYMBOLS.checkmate

        movedItems.push(`
            <span class="${STYLES.moveHistory.item}">
                ${notation}${suffix}
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