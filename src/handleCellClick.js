import { FIGURES, possibleStepsMap } from './const.js'
import { getState, setState } from '../state.js'
import { buildChessBoardHTML } from '../buildChessBoardHTML.js'
import { displayChessBoard } from '../displayChessBoard.js'
import { attachEventListeners } from '../attachEventListeners.js'
import { moveFigure } from '../moveFigure.js'

export const handleCellClick = (cell) => {
    const currentState = getState()
    
    //получаем фигуру из состояния
    const figure = cell.figure 
    const {row, col} = cell

    if (figure) {
        const isSameFigure = currentState.selectedCell?.row === row &&
            currentState.selectedCell?.col === col;

        //если клик по той же фигуре, то сброс
        if (isSameFigure) { 
            const newState = {
                ...currentState,
                selectedCell: null,
                possibleSteps: []
            }

            setState(newState)

            const html = buildChessBoardHTML(newState)
            displayChessBoard(html)
            attachEventListeners()
        } 
        
        //если клик по новой фигуре - выбор новой фигуры
        else { 
            //получаем фунцию расчет хода фигуры
            const getSteps = possibleStepsMap[figure] 
            
            if (getSteps) {
                //вызываем функцию расчета хода
                const steps = getSteps(currentState, row, col) 

                const newState = {
                    ...currentState,
                    selectedCell: {row, col},
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