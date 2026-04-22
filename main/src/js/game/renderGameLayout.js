import { STYLES } from "../const.js"
import { buildCapturedFiguresHTML } from "./buildCapturedFiguresHTML.js"
import { buildChessBoardHTML } from "./buildChessBoardHTML.js"
import { buildMoveHistoryHTML } from "./buildMoveHistoryHTML.js"
import { buildPlayersInfoHTML } from "./buildPlayersInfoHTML.js"
 
export const renderGameLayout = (state) => {
    const chessBoard = buildChessBoardHTML(state)
    const players = buildPlayersInfoHTML(state)
    const history = buildMoveHistoryHTML(state)
    const captured = buildCapturedFiguresHTML(state)

    return `
            <div class="${STYLES.layout.container}">
                <div class="${STYLES.layout.sidebar}">
                    ${players}
                    ${captured}
                    ${history}
                </div>
                <div class="${STYLES.chessBoard.container}">
                    ${chessBoard}
                </div>
            </div>
            `
}