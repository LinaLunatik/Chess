import { lightPossibleSteps } from './lightPossibleSteps.js'
import { NAMES, TYPE_TO_CLASS, possibleStepsMap } from './const.js'
import { getCellOnBoard } from './getCellOnBoard.js'
import { getState, setState } from '../state.js'
import { buildChessBoardHTML } from '../buildChessBoardHTML.js'
import { displayChessBoard } from '../displayChessBoard.js'

export const handleCellClick = (cell) => {
    const currentState = getState()

    const {cellIndex: col, rowIndex: row} = getCellOnBoard(cell);
    const piece = currentState.board[row][col]; //получаем фигуру из состояния

    if (piece && piece.length === 2) { //определяем фигуру
        const color = piece[0]
        const type = piece[1]
        
        let typeName = TYPE_TO_CLASS[type]
        if (type === 'P') { typeName = color === 'b' ? NAMES.blackPawn : NAMES.whitePawn }
        
        const getSteps = possibleStepsMap[typeName] //вызываем расчет хода фигуры

        if (getSteps) {
            const steps = getSteps(currentState.board, row, col)

            const newState = {
                ...currentState,
                selectedFigure: {row, col},
                possibleSteps: steps
            }

            setState(newState)

            const html = buildChessBoardHTML(newState)
            displayChessBoard(html)
        }
    }

    

}