import { FIGURES } from "../const.js"

export const isItLastRowForPawn = (figure, row) => {
    return (
        (figure === FIGURES.whitePawn && row === 0) ||
        (figure === FIGURES.blackPawn && row === 7)
    )
}