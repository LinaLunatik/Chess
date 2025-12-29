import { getInitialState } from "./getInitialState.js"

let state = getInitialState()

export const getState = () => state
export const setState = (newState) => { state = newState } 