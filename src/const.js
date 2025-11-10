import { rookSteps } from './possibleStepsForFigures/rookSteps.js'
import { bishopSteps } from './possibleStepsForFigures/bishopSteps.js'
import { knightSteps } from './possibleStepsForFigures/knightSteps.js'
import { kingSteps } from './possibleStepsForFigures/kingSteps.js'
import { queenSteps } from './possibleStepsForFigures/queenSteps.js'
import { getPawnSteps } from './possibleStepsForFigures/getPawnSteps.js'

export const CHESS_BOARD_SIZE = 8
export const NAMES = {
    rook: 'rook',
    bishop: 'bishop',
    knight: 'knight',
    king: 'king',
    queen: 'queen',
    blackPawn: 'blackPawn',
    whitePawn: 'whitePawn',
}
export const STYLES = {
    possibleStep: 'possibleStep',
    selectedItem: 'selectedItem'
}

export const possibleStepsMap = {
    [NAMES.rook]: rookSteps,
    [NAMES.knight]: knightSteps,
    [NAMES.bishop]: bishopSteps,
    [NAMES.king]: kingSteps,
    [NAMES.queen]: queenSteps,
    [NAMES.blackPawn]: getPawnSteps({ isBlack: true }),
    [NAMES.whitePawn]: getPawnSteps({ isBlack: false })
}

