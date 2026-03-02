import { askPawnPromotion } from "./askPawnPromotion.js"

export const pawnPromotion = async (newBoard, targetCell) => {

    const color = newBoard[targetCell.row][targetCell.col].color
    const newFigure = await askPawnPromotion(color)

    newBoard[targetCell.row][targetCell.col].figure = newFigure
}