import { classNames } from "../../utils/classNames/classNames.js"
import { STYLES } from "../const.js"

export const buildPlayersInfoHTML = (state) => {

    const whiteClass = classNames(
        STYLES.playerWhite,
        {'active': state.isCurrentPlayerWhite}
    )
    const blackClass = classNames(
        STYLES.playerBlack,
        {'active': !state.isCurrentPlayerWhite}
    )

    return `
        <div class="${STYLES.players}">
            <div class="${whiteClass}">Белые</div>
            <div class="${blackClass}">Черные</div>
        </div>`
}