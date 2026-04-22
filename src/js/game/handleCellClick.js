import { COLORS, possibleStepsMap } from '../const.js'
import { 
    clearPossibleSteps, 
    clearSelectedCell, 
    getState, 
    setPossibleSteps, 
    setSelectedCell } from './state.js'
import { moveFigure } from '../game/moveFigure.js'
import { createChessBoard } from './createChessBoard.js'
import { isMoveValid } from './isMoveValid.js'
import { isSameCell } from './isSameCell.js'

export const handleCellClick = (cell) => {
    const currentState = getState()
    const currentColor = currentState.isCurrentPlayerWhite ? COLORS.WHITE : COLORS.BLACK
    const {row, col} = cell
    
    //если фигура уже выбрана и клик по одной из клеток возможного хода, перемещаем
    if (isMoveValid(currentState, cell))
        {   
            moveFigure(cell)
            return
        }

    //получаем фигуру из состояния
    const figure = cell.figure 
    if (cell.color !== currentColor) return

    if (figure) {
        //если клик по той же фигуре, то сброс
        if (isSameCell(currentState.selectedCell, cell)) { 
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