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
    // === Глобальные ===
    chessFigure: 'chess-figure',
    panelTitle: 'panel-title',
    // === Сетка ===
    layout: {
        container: 'gameLayout',
        sidebar: 'infoArea'
    },
    // === Блок: Съеденные фигуры ===
    captured: {
        container: 'captured-container',
        section: 'captured-section'
    },
    // === Блок: История ходов ===
    moveHistory: {
        container: 'move-history',
        list: 'move-list',
        item: 'move-item'
    },
    // === Блок: Индикатор хода ===
    turnIndicator: {
        container: 'players',
        whiteTurn: 'turnWhite',
        blackTurn: 'turnBlack'
    },
    // === Блок: Шахматная доска ===
    chessBoard: {
        container: 'chess-board',
        row: 'chess-row',
        cell: 'chess-cell',
        cellDark: 'chess-cell--dark',
        cellSelected: 'chess-cell--selected',
        cellPossible: 'chess-cell--possible',
        cellCheck: 'chess-cell--check'
    }
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
    castling: 'castling',
    check: 'check',
    checkmate: 'checkmate'
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

export const ASCII_CODE_A = 'a'.charCodeAt(0)