export const initialState = {
    board: [
       ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
       ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
       ['', '', '', '', '', '', '', ''],
       ['', '', '', '', '', '', '', ''],
       ['', '', '', '', '', '', '', ''],
       ['', '', '', '', '', '', '', ''],
       ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
       ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR']
    ],
    isCurrentPlayerWhite: true, // true or false
    selectedFigure: null, //{row, col} | null,
    possibleSteps: [] // [{row, col, type: 'step' | 'capture'}]
}

let state = {...initialState}

export const getState = () => state
export const setState = (newState) => {state = newState} 