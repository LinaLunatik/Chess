import { getState } from "./state.js"
import { buildChessBoardHTML } from "./buildChessBoardHTML.js"
import { displayChessBoard } from "./displayChessBoard.js"
import { attachEventListeners } from "./attachEventListeners.js"

export const createChessBoard = () => {
    const currentState = getState();
    const html = buildChessBoardHTML(currentState);
    displayChessBoard(html);
    attachEventListeners();
}
