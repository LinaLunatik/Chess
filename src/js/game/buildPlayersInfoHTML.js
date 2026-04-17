import { STYLES } from "../const.js"

export const buildPlayersInfoHTML = (state) => {
    const isWhiteTurn = state.isCurrentPlayerWhite
    const turnText = isWhiteTurn ? 'Ход белых' : 'Ход черных'
    const activeClass = isWhiteTurn ? STYLES.turnWhite : STYLES.turnBlack

    return `
        <div class="${STYLES.players} ${activeClass}">
            ${turnText}
        </div>`
}