import { toChessCoords } from "../toChessCoords.js"
import { STYLES, FIGURE_IMAGE_PATH, SYMBOLS } from "../../const.js"

export const buildMoveHistoryHTML = (state) => {
    const moves = state.moveHistory
    
    const moveItems = []

    for (let move of moves) {
        let imgTag = ''

        if (move.figure && move.color) {
            const src = FIGURE_IMAGE_PATH[move.figure][move.color];
            if (src) {
                imgTag = `<img 
                        src="${src}" 
                        alt="${move.figure}" 
                        class="${STYLES.figuresInHistory}"
                    >`;
            }
        }

        const chessCoords = toChessCoords(move.targetCell.row, move.targetCell.col)
        const typeSymbol = SYMBOLS[move.type]

        moveItems.push(`${imgTag}${typeSymbol}${chessCoords}`) 
    }

    return `
                <div class="${STYLES.moveHistory}">
                    <h3>История ходов</h3>
                    <div class="${STYLES.moveList}">
                        ${moveItems.join(' | ')}
                    </div>
                </div>
            `
}