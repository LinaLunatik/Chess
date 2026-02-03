import { possibleStepsMap } from '../const.js'
import { getState, setState } from './state.js'
import { moveFigure } from '../game/moveFigure.js'
import { createChessBoard } from './createChessBoard.js'

export const handleCellClick = (cell) => {
    const currentState = getState()
    const {row, col} = cell
    
    //если фигура уже выбрана и клик по одной из клеток возможного хода
    if (
        currentState.selectedCell &&
        currentState.possibleSteps.some(step => 
            step.row === row && 
            step.col === col
        )
    )
    {   
        moveFigure(row, col)
        return
    }

    //получаем фигуру из состояния
    const figure = cell.figure 

    if (figure) {
        const isSameFigure = 
            currentState.selectedCell?.row === row &&
            currentState.selectedCell?.col === col;

        //если клик по той же фигуре, то сброс
        if (isSameFigure) { 
            const newState = {
                ...currentState,
                selectedCell: null,
                possibleSteps: []
            }

            setState(newState)
            createChessBoard()
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
                createChessBoard()
            }
        }
    }
}