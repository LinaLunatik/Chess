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
            <div class="gameLayout">
                <div class="infoArea">
                    ${players}
                    ${captured}
                    ${history}
                </div>
                <div class="gameArea">
                    ${chessBoard}
                </div>
            </div>
            `
}