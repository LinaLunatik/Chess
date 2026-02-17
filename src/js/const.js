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
        black: 'src/assets/figures/black/rook.svg', 
        white: 'src/assets/figures/white/rook.svg'
    },
    knight: {
        black: 'src/assets/figures/black/knight.svg',
        white: 'src/assets/figures/white/knight.svg'
    },
    bishop: {
        black: 'src/assets/figures/black/bishop.svg',
        white: 'src/assets/figures/white/bishop.svg'
    },
    king: {
        black: 'src/assets/figures/black/king.svg',
        white: 'src/assets/figures/white/king.svg'
    },
    queen: {
        black: 'src/assets/figures/black/queen.svg',
        white: 'src/assets/figures/white/queen.svg'
    },
    blackPawn: {
        black: 'src/assets/figures/black/pawn.svg'
    },
    whitePawn: {
        white: 'src/assets/figures/white/pawn.svg'
    }
}

export const STYLES = {
    possibleStep: 'possibleStep',
    selectedItem: 'selectedItem',
    table: 'table',
    players: 'players',
    playerWhite: 'playerWhite',
    playerBlack: 'playerBlack',
    active: 'active',
    moveHistory: 'moveHistory'
}

export const possibleStepsMap = {
    [FIGURES.rook]: rookSteps,
    [FIGURES.knight]: knightSteps,
    [FIGURES.bishop]: bishopSteps,
    [FIGURES.king]: kingSteps,
    [FIGURES.queen]: queenSteps,
    [FIGURES.blackPawn]: getPawnSteps({ isBlack: true }),
    [FIGURES.whitePawn]: getPawnSteps({ isBlack: false })
}

export const MOVE_TYPES = {
    step: 'step',
    capture: 'capture',
    move: 'move',
}

export const ID_IN_HTML = {
    root: 'root'
}

export const SYMBOLS = {
        move: ' ',
        capture: 'x',
        castling: '0-0',
        check: '+',
        checkmate: '#'
}