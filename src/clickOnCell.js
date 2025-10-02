import { handleCellClick } from './handleCellClick.js'
import { getDataFromHTML } from './getDataFromHTML.js'

const {rooks, knights, bishops, queens, kings, pawns, cells} = getDataFromHTML()

export function clickOnCell() {
    cells.forEach(cell => { cell.addEventListener('click', handleCellClick) })
}