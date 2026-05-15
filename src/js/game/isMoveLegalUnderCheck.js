import { getOppositeColor } from "../../utils/getOppositeColor.js"
import { isCellAttacked } from "../../utils/isCellAttacked.js"
import { FIGURES } from "../const.js"
import { findFigureCell } from "./findFigureCell.js"
import { moveToCell } from "./state.js"

export const isMoveLegalUnderCheck = (state, fromCell, toCell, colorOfKing) => {
    const boardCopy = structuredClone(state.board)
    const fakeState = {board: boardCopy}
    boardCopy[toCell.row][toCell.col] = moveToCell(toCell, fromCell)
    boardCopy[fromCell.row][fromCell.col] = {
        figure: null,
        color: null, 
        row: fromCell.row,
        col: fromCell.col
    }

    const kingCell = findFigureCell(fakeState, FIGURES.king, colorOfKing)
    if (!kingCell) return false

    const opponentColor = getOppositeColor(colorOfKing)
    const kingIsInDanger = isCellAttacked(
        boardCopy, kingCell.row, kingCell.col, opponentColor)
    
    return !kingIsInDanger
}