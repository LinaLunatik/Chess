import { getState } from "./state.js"
import { displayChessBoard } from "./displayChessBoard.js"
import { attachEventListeners } from "./attachEventListeners.js"
import { renderGameLayout } from "./renderGameLayout.js"

export const createChessBoard = () => {
    const currentState = getState();
    const html = renderGameLayout(currentState);
    displayChessBoard(html);
    attachEventListeners();
}
