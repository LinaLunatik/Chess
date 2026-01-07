import { ID_IN_HTML } from "./src/const.js"

export const displayChessBoard = (html) => {
    
    const root = document.getElementById(ID_IN_HTML.root)

    if (root) { root.innerHTML = html }
}