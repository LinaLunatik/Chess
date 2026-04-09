import { findAllFiguresByColor } from "./findAllFiguresByColor.js"
import { findAllPossibleSteps } from "./findAllPossibleSteps.js"
import { COLORS, FIGURES } from "../const.js"
import { findFigureCell } from "./findFigureCell.js"

export const isItCheck = (state, colorOfKing) => {

    const kingCell = findFigureCell(state, FIGURES.king, colorOfKing)
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