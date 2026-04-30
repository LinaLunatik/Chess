import { rookSteps } from './possibleStepsForFigures/rookSteps.js'
import { bishopSteps } from './possibleStepsForFigures/bishopSteps.js'
import { knightSteps } from './possibleStepsForFigures/knightSteps.js'
import { kingSteps } from './possibleStepsForFigures/kingSteps.js'
import { queenSteps } from './possibleStepsForFigures/queenSteps.js'
import { getPawnSteps } from './possibleStepsForFigures/getPawnSteps.js'

export const CHESS_BOARD_SIZE = 8
export const COLORS = {
    BLACK: 'black',
    WHITE: 'white'
}
export const OPPOSITE_COLORS = {
    [COLORS.BLACK] : COLORS.WHITE,
    [COLORS.WHITE] : COLORS.BLACK
}
export const FIGURES = {
    rook: 'rook',
    bishop: 'bishop',
    knight: 'knight',
    king: 'king',
    queen: 'queen',
    blackPawn: 'blackPawn',
    whitePawn: 'whitePawn',
}
export const FIGURES_RU_NAMES = {
    rook: 'Ладья',
    bishop: 'Слон',
    knight: 'Конь',
    king: 'Король',
    queen: 'Ферзь',
    blackPawn: 'Черная пешка',
    whitePawn: 'Белая пешка'
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
        blackTurn: 'turnBlack',
        hintBlink: 'hintBlink'
    },
    // === Блок: Шахматная доска ===
    chessBoard: {
        container: 'chess-board',
        wrapper: 'chess-board-wrapper',
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
    [FIGURES.blackPawn]: getPawnSteps({ color: COLORS.BLACK }),
    [FIGURES.whitePawn]: getPawnSteps({ color: COLORS.WHITE })
}

export const MOVE_TYPES = {
    step: 'step',
    capture: 'capture',
    move: 'move',
    castling: 'castling',
    check: 'check',
    checkmate: 'checkmate',
    enPassant: 'enPassant'
}

export const ID_IN_HTML = {
    root: 'root'
}

export const ROOK_SIDE = {
    kingSide: 'kingSide',
    queenSide: 'queenSide'
}

export const DEFAULT_CASTLING_RIGHTS = {
    [ROOK_SIDE.kingSide]: true,
    [ROOK_SIDE.queenSide]: true
}

export const SYMBOLS = {
    move: ' ',
    step: '',
    capture: 'x',
    castling: {
        [ROOK_SIDE.kingSide]: 'O-O',
        [ROOK_SIDE.queenSide]: 'O-O-O'
    },
    check: '+',
    checkmate: '#'
}

export const GAME_STATUS = {
    checkmate: 'checkmate',
    stalemate: 'stalemate',
    check: 'check',
    continue: 'continue' 
}

export const ASCII_CODE_A = 'a'.charCodeAt(0)