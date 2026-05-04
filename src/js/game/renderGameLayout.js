import { STYLES } from "../const.js"
import { buildCapturedFiguresHTML } from "./buildCapturedFiguresHTML.js"
import { buildChessBoardHTML } from "./buildChessBoardHTML.js"
import { buildMoveHistoryHTML } from "./buildMoveHistoryHTML.js"
import { buildPlayersInfoHTML } from "./buildPlayersInfoHTML.js"
import { buildChessBoardCoordsHTML } from "./buildChessBoardCoordsHTML.js"
 
export const renderGameLayout = (state) => {
    const chessBoard = buildChessBoardHTML(state)
    const players = buildPlayersInfoHTML(state)
    const history = buildMoveHistoryHTML(state)
    const captured = buildCapturedFiguresHTML(state)
    const coords = buildChessBoardCoordsHTML()

    return `
            <div class="${STYLES.layout.container}">
                <div class="${STYLES.layout.sidebar}">
                    ${players}
                    ${captured}
                    ${history}
                </div>
                <div class="${STYLES.chessBoard.wrapper}">
                    ${coords}
                    ${chessBoard}
                </div>
            </div>
            `
}