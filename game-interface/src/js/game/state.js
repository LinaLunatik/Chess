import { getInitialState } from "./getInitialState.js"

let state = getInitialState()

export const getState = () => state
export const setState = (newState) => { state = newState } 

export const getCell = ({row, col}) => state.board[row][col]
export const moveToCell = (cell, fromCell) => {
    return {
        ...cell,
        figure: fromCell.figure,
        isBlack: fromCell.isBlack
    }
}

export const setBoard = (newBoard)  => {
    const state = getState()
    setState({
        ...state,
        board: newBoard
    })
}

export const clearSelectedCell = () => {
    const state = getState()
    setState({
        ...state,
        selectedCell: null
    })
}

export const setSelectedCell = (cell) => {
    const state = getState()
    setState({
        ...state,
        selectedCell: cell
    })
}

export const clearPossibleSteps = () => {
    const state = getState()
    setState({
        ...state,
        possibleSteps: []
    })
}

export const setPossibleSteps = (steps) => {
    const state = getState()
    setState({
        ...state,
        possibleSteps: steps
    })
}

export const setCapturedFigures = (newCapturedFigures) => {
    const state = getState()
    setState({
        ...state,
        capturedFigures: newCapturedFigures
    })
}

export const setMoveHistory = (newMoveHistory) => {
    const state = getState()
    setState({
        ...state,
        moveHistory: newMoveHistory
    })
}