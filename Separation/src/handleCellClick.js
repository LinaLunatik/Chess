import { FIGURES, TYPE_TO_CLASS, possibleStepsMap } from './const.js'
import { getCoordsOfCell } from './getCoordsOfCell.js'
import { getState, setState } from '../state.js'
import { buildChessBoardHTML } from '../buildChessBoardHTML.js'
import { displayChessBoard } from '../displayChessBoard.js'
import { attachEventListeners } from '../attachEventListeners.js'
import { moveFigure } from '../moveFigure.js'

export const handleCellClick = (cell) => {
    const currentState = getState()
    const coords = getCoordsOfCell(cell);  // ← получаем объект
    const { colIndex: col, rowIndex: row } = coords; // Теперь деструктуризация
    const figure = currentState.board[row][col]; //получаем фигуру из состояния

    if (figure && figure.length === 2) { //определяем фигуру

        const isSameFigure = currentState.selectedCell?.row === row &&
            currentState.selectedCell?.col === col;

        if (isSameFigure) { //клик по той же фигуре
            const newState = { //сброс
                ...currentState,
                selectedCell: null,
                possibleSteps: []
            }

            setState(newState)
            const html = buildChessBoardHTML(newState)
            displayChessBoard(html)
            attachEventListeners()
        } else { //клик по новой фигуре - выбор новой фигуры
            const color = figure[0]
            const type = figure[1]

            let typeName = TYPE_TO_CLASS[type]
            if (type === 'P') { 
                typeName = color === 'b' ? FIGURES.blackPawn : FIGURES.whitePawn }

            const getSteps = possibleStepsMap[typeName] //берем фунцию расчет хода фигуры

            if (getSteps) {
                const steps = getSteps(currentState, row, col) //вызываем функцию расчета хода

                if (!Array.isArray(steps)) { return }

                const clickedStep = currentState.possibleSteps.find(step =>
                    step.row === row && step.col === col)

                if (clickedStep) { moveFigure(currentState.selectedCell, row, col) }
                else {
                    const newState = {
                        ...currentState,
                        selectedCell: null,
                        possibleSteps: []
                    }
                }
                setState(newState)
                const html = buildChessBoardHTML(newState)
                displayChessBoard(html)
                attachEventListeners()
            }
        }
    }
}