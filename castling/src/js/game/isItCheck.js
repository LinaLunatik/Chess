import { findKingCell } from "./findKingCell.js"
import { findAllFiguresByColor } from "./findAllFiguresByColor.js"
import { OPPOSITE_COLORS } from "../const.js"
import { findAllGeometricSteps } from "./findAllGeometricSteps.js"

export const isItCheck = (state, colorOfKing) => {

    const kingCell = findKingCell(state, colorOfKing)
    if (!kingCell) return false

    const opponentColor = OPPOSITE_COLORS[colorOfKing]
    const allOpponentFigures = findAllFiguresByColor(state, opponentColor)
    const allSteps = findAllGeometricSteps(state, allOpponentFigures)

    const isKingInDanger = allSteps.some(step =>
        step.row === kingCell.row &&
        step.col === kingCell.col
    )

    return isKingInDanger
}