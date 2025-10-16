export const cellOnChessBoard = (targetRow, targetCell) => {
    return ( targetRow >= 1 &&
            targetRow <= 8 &&
            targetCell >= 1 &&
            targetCell <= 8
)
}
