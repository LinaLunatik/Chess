import { getInitialState } from "./getInitialState.js"

let state = getInitialState()

export const getState = () => state
export const setState = (newState) => { state = newState } 

export const getCell = ({row, col}) => state.board[row][col]
export const setCell = (cell, fromCell) => {
    return {
        ...cell,
        figure: fromCell.figure,
        isBlack: fromCell.isBlack
    }
}