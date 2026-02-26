import { possibleStepsMap } from '../const.js'
import { 
    clearPossibleSteps, 
    clearSelectedCell, 
    getState, 
    setPossibleSteps, 
    setSelectedCell } from './state.js'
import { moveFigure } from '../game/moveFigure.js'
import { createChessBoard } from './createChessBoard.js'
import { isMoveValid } from './isMoveValid.js'

export const handleCellClick = (cell) => {
    const currentState = getState()
    const {row, col} = cell
    
    //если фигура уже выбрана и клик по одной из клеток возможного хода, перемещаем
    if (isMoveValid(currentState, cell))
        {   
            moveFigure(cell)
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
            clearSelectedCell()
            clearPossibleSteps()

            createChessBoard()
        } 
        
        //если клик по новой фигуре - выбор новой фигуры
        else { 
            //получаем фунцию расчет хода фигуры
            const getSteps = possibleStepsMap[figure] 
            
            if (getSteps) {
                //вызываем функцию расчета хода
                const steps = getSteps(currentState, row, col) 

                setSelectedCell({row, col})
                setPossibleSteps(steps)

                createChessBoard()
            }
        }
    }
}