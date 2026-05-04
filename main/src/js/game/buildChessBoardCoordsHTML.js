import { STYLES } from "../const.js"

export const buildChessBoardCoordsHTML = () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const numbers = ['8', '7', '6', '5', '4', '3', '2', '1']

    const lettersHTML = letters.map(letter => `<span>${letter}</span>`).join('')
    const numbersHTML = numbers.map(number => `<span>${number}</span>`).join('')

    return `
        <div class="${STYLES.chessBoard.coords} ${STYLES.chessBoard.letterTop}">
            ${lettersHTML}
        </div>
        <div class="${STYLES.chessBoard.coords} ${STYLES.chessBoard.letterBottom}">
            ${lettersHTML}
        </div>
        <div class="${STYLES.chessBoard.coords} ${STYLES.chessBoard.numberLeft}">
            ${numbersHTML}
        </div>
        <div class="${STYLES.chessBoard.coords} ${STYLES.chessBoard.numberRight}">
            ${numbersHTML}
        </div>
    `
}