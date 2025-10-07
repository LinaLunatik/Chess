import { handleCellClick } from './handleCellClick.js'
import { getDataFromHTML } from './getDataFromHTML.js'

const {cells} = getDataFromHTML()

export const clickOnCell = () => {
    cells.forEach(cell => { cell.addEventListener('click', handleCellClick) })
}