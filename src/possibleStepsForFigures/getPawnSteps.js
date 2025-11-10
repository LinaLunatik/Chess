import { isOnChessBoard } from "/src/isOnChessBoard.js"
import { STYLES } from "../const.js"

export const getPawnSteps = ({ isBlack }) => {

    const pawnSteps = (rows, rowIndex, cellIndex) => {

        const directions = [
            [1, 0],
            [2, 0],
        ]

        const step = isBlack ? 1 : -1

        directions.forEach(([rowDir, cellDir]) => {
            const targetRow = rowIndex + rowDir * step;
            const targetCell = cellIndex + cellDir;

            if (isOnChessBoard(targetRow, targetCell)) {
                const targetCellElement = rows[targetRow].children[targetCell]
                targetCellElement.classList.add(STYLES.possibleStep)
            }
        })

    }
    return pawnSteps
}
