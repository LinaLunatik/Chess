import { rookSteps } from './possibleStepsForFigures/rookSteps.js'
import { bishopSteps } from './possibleStepsForFigures/bishopSteps.js'
import { knightSteps } from './possibleStepsForFigures/knightSteps.js'
import { kingSteps } from './possibleStepsForFigures/kingSteps.js'
import { queenSteps } from './possibleStepsForFigures/queenSteps.js'
import { getPawnSteps } from './possibleStepsForFigures/getPawnSteps.js'

export const CHESS_BOARD_SIZE = 8
export const FIGURES = {
    rook: 'rook',
    bishop: 'bishop',
    knight: 'knight',
    king: 'king',
    queen: 'queen',
    blackPawn: 'blackPawn',
    whitePawn: 'whitePawn',
}
export const FIGURE_IMAGE_PATH = {
    b: {
        R: 'assets/figures/black/rook.svg',
        N: 'assets/figures/black/knight.svg',
        B: 'assets/figures/black/bishop.svg',
        K: 'assets/figures/black/king.svg',
        Q: 'assets/figures/black/queen.svg',
        P: 'assets/figures/black/pawn.svg'
    },
    w: {
        R: 'assets/figures/white/rook.svg',
        N: 'assets/figures/white/knight.svg',
        B: 'assets/figures/white/bishop.svg',
        K: 'assets/figures/white/king.svg',
        Q: 'assets/figures/white/queen.svg',
        P: 'assets/figures/white/pawn.svg'
    }
}

export const TYPE_TO_CLASS = {
    R: 'rook',
    N: 'knight',
    B: 'bishop',
    K: 'king',
    Q: 'queen',
    P: 'pawn'
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

