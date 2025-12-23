import { resetGame } from "./resetGame.js"

let state = resetGame()

export const getState = () => state
export const setState = (newState) => { state = newState } 