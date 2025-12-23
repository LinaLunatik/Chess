import { CHESS_BOARD_SIZE, FIGURES } from "./src/const.js"

export const resetGame = () => {

    const createEmptyCell = () => ({
        row: undefined,
        col: undefined,
        figure: null,
        isBlack: null,
        // TODO добавить подсветку selected | possibleStep | possibleCapture | null
        highlight: null
    })

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
        { ...createEmptyCell(), figure: figureType, isBlack: true }))

    const secondBlackLine = Array.from({ length: CHESS_BOARD_SIZE }, () => (
        { ...createEmptyCell(), figure: FIGURES.blackPawn, isBlack: true }))

    const emptyRow = Array.from({ length: CHESS_BOARD_SIZE }, () => ({ ...createEmptyCell() }))

    const firstWhiteLine = orderFirstLine.map((figureType) => (
        { ...createEmptyCell(), figure: figureType, isBlack: false }))

    const secondWhiteLine = Array.from({ length: CHESS_BOARD_SIZE }, () => (
        { ...createEmptyCell(), figure: FIGURES.whitePawn, isBlack: false }))

    const initialBoardStructure = [
        firstBlackLine,
        secondBlackLine,
        emptyRow,
        emptyRow,
        emptyRow,
        emptyRow,
        secondWhiteLine,
        firstWhiteLine
    ]

    //присваивание координат (row,col) каждой ячейке
    const board = initialBoardStructure.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
            { ...cell, row: rowIndex, col: colIndex }
        )))

    const initialState = {
        board,
        // true or false
        isCurrentPlayerWhite: true,
        // {row, col} | null,
        selectedCell: null,
        // [{row, col, type: 'step' | 'capture'}]
        possibleSteps: []
    }

    return initialState
}