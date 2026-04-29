import { COLORS, possibleStepsMap, STYLES } from '../const.js'
import {
    clearPossibleSteps,
    clearSelectedCell,
    getState,
    setPossibleSteps,
    setSelectedCell
} from './state.js'
import { moveFigure } from '../game/moveFigure.js'
import { createChessBoard } from './createChessBoard.js'
import { isMoveValid } from './isMoveValid.js'
import { isSameCell } from './isSameCell.js'

export const handleCellClick = (cell) => {

    const currentState = getState()
    const currentColor = currentState.isCurrentPlayerWhite ? COLORS.WHITE : COLORS.BLACK
    const { row, col } = cell

    // Если фигура уже выбрана и клик по одной из клеток возможного хода, перемещаем
    if (isMoveValid(currentState, cell)) {
        moveFigure(cell)
        return
    }

    // Получаем фигуру из состояния
    const figure = cell.figure
    // Если клик на фигуру чужого цвета
    if (cell.color !== currentColor) {
        const playerInfo = document.getElementsByClassName(
            STYLES.turnIndicator.container)[0]
        playerInfo.classList.add(STYLES.turnIndicator.hintBlink)
        setTimeout(() => {
            playerInfo.classList.remove(STYLES.turnIndicator.hintBlink)
        }, 1000)
        return
    }

    if (figure) {
        // Если клик по той же фигуре, то сброс
        if (isSameCell(currentState.selectedCell, cell)) {
            clearSelectedCell()
            clearPossibleSteps()

            createChessBoard()
        }

        // Если клик по новой фигуре - выбор новой фигуры
        else {
            // Получаем фунцию расчет хода фигуры
            const getSteps = possibleStepsMap[figure]

            if (getSteps) {
                // Вызываем функцию расчета хода
                const steps = getSteps(currentState, row, col)

                setSelectedCell({ row, col })
                setPossibleSteps(steps)

                createChessBoard()
            }
        }
    }
}