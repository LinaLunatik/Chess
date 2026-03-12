import { findKingCell } from "./findKingCell.js"
import { findAllFiguresByColor } from "./findAllFiguresByColor.js"
import { findAllPossibleSteps } from "./findAllPossibleSteps.js"
import { COLORS } from "../const.js"

export const isItCheck = (state, colorOfKing) => {

    const kingCell = findKingCell(state, colorOfKing)
    if (!kingCell) return false

    const opponentColor = colorOfKing === COLORS.BLACK ? COLORS.WHITE : COLORS.BLACK
    const allOpponentFigures = findAllFiguresByColor(state, opponentColor)
    const allSteps = findAllPossibleSteps(state, allOpponentFigures)

    const isKingInDanger = allSteps.some(step =>
        step.row === kingCell.row &&
        step.col === kingCell.col
    )

    return isKingInDanger
}