import { NAMES, TYPE_TO_CLASS, possibleStepsMap } from './const.js'
import { getCellOnBoard } from './getCellOnBoard.js'
import { getState, setState } from '../state.js'
import { buildChessBoardHTML } from '../buildChessBoardHTML.js'
import { displayChessBoard } from '../displayChessBoard.js'
import { attachEventListeners } from '../attachEventListeners.js'

export const handleCellClick = (cell) => {
    const currentState = getState()

    const coords = getCellOnBoard(cell);  // ← получаем объект

    // Теперь деструктурируем
    const { colIndex: col, rowIndex: row } = coords;
    const piece = currentState.board[row][col]; //получаем фигуру из состояния

    if (piece && piece.length === 2) { //определяем фигуру

        const isSameFigure = currentState.selectedFigure?.row === row &&
            currentState.selectedFigure?.col === col;

        if (isSameFigure) {
            const newState = {
                ...currentState,
                selectedFigure: null,
                possibleSteps: []
            }

            setState(newState)
            const html = buildChessBoardHTML(newState)
            displayChessBoard(html)
            attachEventListeners()
        } else {
            const color = piece[0]
            const type = piece[1]

            let typeName = TYPE_TO_CLASS[type]
            if (type === 'P') { typeName = color === 'b' ? NAMES.blackPawn : NAMES.whitePawn }

            const getSteps = possibleStepsMap[typeName] //берем фунцию расчет хода фигуры

            if (getSteps) {
                const steps = getSteps(currentState, row, col) //вызываем функцию расчета хода

                if (!Array.isArray(steps)) { return }

                const newState = {
                    ...currentState,
                    selectedFigure: { row, col },
                    possibleSteps: steps
                }

                setState(newState)

                const html = buildChessBoardHTML(newState)
                displayChessBoard(html)
                attachEventListeners()
            }
        }
    }
}