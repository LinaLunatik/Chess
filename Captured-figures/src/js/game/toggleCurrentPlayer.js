import { getState, setState } from "./state.js"

export const toggleCurrentPlayer = () => {
    const currentState = getState()

    const newState = {
        ...currentState,
        isCurrentPlayerWhite: !currentState.isCurrentPlayerWhite
    }

    setState(newState)
}