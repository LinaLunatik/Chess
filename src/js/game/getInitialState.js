import { CHESS_BOARD_SIZE, COLORS, FIGURES } from "../const.js"

export const getInitialState = () => {

    const createEmptyCell = () => ({
        row: undefined,
        col: undefined,
        figure: null,
        color: null,
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

    const createCell = ({ figure, color }) => (
        { ...createEmptyCell(), 
            figure, 
            color 
        })

    const firstBlackLine = orderFirstLine.map((figureType) => (
        createCell({ figure: figureType, color: COLORS.BLACK })))

    const secondBlackLine = Array.from({ length: CHESS_BOARD_SIZE }, () => (
        createCell({ figure: FIGURES.blackPawn, color: COLORS.BLACK })))

    const createEmptyRow = () => 
        Array.from({ length: CHESS_BOARD_SIZE }, () => (
        createEmptyCell()))

    const firstWhiteLine = orderFirstLine.map((figureType) => (
        createCell({ figure: figureType, color: COLORS.WHITE })))

    const secondWhiteLine = Array.from({ length: CHESS_BOARD_SIZE }, () => (
        createCell({ figure: FIGURES.whitePawn, color: COLORS.WHITE })))

    const initialBoardStructure = [
        firstBlackLine,
        secondBlackLine,
        createEmptyRow(),
        createEmptyRow(),
        createEmptyRow(),
        createEmptyRow(),
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
        possibleSteps: [],
        // съеденные фигуры / строки
        capturedFigures: {
            white: [],
            black: []
        }
    }

    return initialState
}