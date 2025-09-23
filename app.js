import {getDataFromHTML} from './src/getDataFromHTML.js'
const {rooks, knights, bishops, queens, kings, pawns, cells} = getDataFromHTML()

cells.forEach(cell => { cell.addEventListener('click', handleCellClick) })

import { handleCellClick } from './src/handleCellClick.js'
import { getCellOnBoard } from './src/getCellOnBoard.js'
