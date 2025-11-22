import { initialState } from "./state.js"
import { buildChessBoardHTML } from "./buildChessBoardHTML.js"
import { displayChessBoard } from "./displayChessBoard.js"
import { attachEventListeners } from "./attachEventListeners.js"

export const createChessBoard = () => {
    const html = buildChessBoardHTML(initialState);
    displayChessBoard(html);
    attachEventListeners();
}
