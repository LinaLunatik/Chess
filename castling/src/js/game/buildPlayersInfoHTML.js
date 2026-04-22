import { STYLES } from "../const.js"

export const buildPlayersInfoHTML = (state) => {
    const isWhiteTurn = state.isCurrentPlayerWhite
    const turnText = isWhiteTurn ? 'Ход белых' : 'Ход черных'
    const activeClass = isWhiteTurn ? 
        STYLES.turnIndicator.whiteTurn : 
        STYLES.turnIndicator.blackTurn

    return `
        <div class="${STYLES.turnIndicator.container} ${activeClass}">
            ${turnText}
        </div>`
}