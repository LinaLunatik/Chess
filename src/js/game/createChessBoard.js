import { getState } from "./state.js"
import { displayChessBoard } from "./displayChessBoard.js"
import { attachEventListeners } from "./attachEventListeners.js"
import { renderGameLayout } from "./renderGameLayout.js"
import { ID_IN_HTML } from "../const.js"
import { getUndoStack } from "./state.js"

export const createChessBoard = () => {
    const currentState = getState();
    const html = renderGameLayout(currentState);
    displayChessBoard(html);
    attachEventListeners();

    const btnUndo = document.getElementById(ID_IN_HTML.btnUndo)
    if (btnUndo) {
        btnUndo.disabled = (getUndoStack().length === 0)
    }

}
