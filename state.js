import { CHESS_BOARD_SIZE, FIGURES } from "./src/const"

const emptyCell = {
    row: undefined,
    col: undefined,
    figure: null
}

const orderFirstLine = [
    FIGURES.rook,
    FIGURES.knight,
    FIGURES.bishop,
    FIGURES.queen,
    FIGURES.king,
    FIGURES.bishop,
    FIGURES.knight,
    FIGURES.rook
]

const firstBlackLine = orderFirstLine.map((figureType) => (
    {...emptyCell, figure: figureType, isBlack: true }))

const secondBlackLine = Array.from({length: CHESS_BOARD_SIZE}, () => (
    {...emptyCell, figure: FIGURES.blackPawn, isBlack: true}))

const emptyRow = Array.from({length: CHESS_BOARD_SIZE}, () => (emptyCell))

const firstWhiteLine = orderFirstLine.map((figureType) => (
    {...emptyCell, figure: figureType, isBlack: false}))

const secondWhiteLine = Array.from({length: CHESS_BOARD_SIZE}, () => (
    {...emptyCell, figure: FIGURES.whitePawn, isBlack: false}))

export const initialState = {
    board: [
       firstBlackLine,
       secondBlackLine,
       emptyRow,
       emptyRow,
       emptyRow,
       emptyRow,
       secondWhiteLine,
       firstWhiteLine
    ],
    // true or false
    isCurrentPlayerWhite: true, 
    // {row, col} | null,
    selectedCell: null, 
    // [{row, col, type: 'step' | 'capture'}]
    possibleSteps: [] 
}

let state = {...initialState}

export const getState = () => state
export const setState = (newState) => {state = newState} 