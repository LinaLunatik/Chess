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
    rook: {
        black: 'assets/figures/black/rook.svg', 
        white: 'assets/figures/white/rook.svg'
    },
    knight: {
        black: 'assets/figures/black/knight.svg',
        white: 'assets/figures/white/knight.svg'
    },
    bishop: {
        black: 'assets/figures/black/bishop.svg',
        white: 'assets/figures/white/bishop.svg'
    },
    king: {
        black: 'assets/figures/black/king.svg',
        white: 'assets/figures/white/king.svg'
    },
    queen: {
        black: 'assets/figures/black/queen.svg',
        white: 'assets/figures/white/queen.svg'
    },
    pawn: {
        black: 'assets/figures/black/pawn.svg',
        white: 'assets/figures/white/pawn.svg'
    }
}

export const STYLES = {
    possibleStep: 'possibleStep',
    selectedItem: 'selectedItem',
    table: 'table'
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

export const MOVE_TYPES = {
    step: 'step',
    capture: 'capture'
}
