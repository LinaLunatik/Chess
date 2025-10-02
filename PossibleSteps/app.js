import { getDataFromHTML } from './src/getDataFromHTML.js'
import { handleCellClick } from './src/handleCellClick.js'
import { getCellOnBoard } from './src/getCellOnBoard.js'
import { clickOnCell } from './src/clickOnCell.js'

const {rooks, knights, bishops, queens, kings, pawns, cells} = getDataFromHTML()

clickOnCell()