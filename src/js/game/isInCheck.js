import { FIGURES } from "../const.js"
import { findFigureCell } from "./findFigureCell.js"
import { getOppositeColor } from "../../utils/getOppositeColor.js"
import { isCellAttacked } from "../../utils/isCellAttacked.js"

export const isInCheck = (state, colorOfKing) => {

    const kingCell = findFigureCell(state, FIGURES.king, colorOfKing)
    if (!kingCell) return false

    const opponentColor = getOppositeColor(colorOfKing)

    return isCellAttacked(state.board, kingCell.row, kingCell.col, opponentColor)
}