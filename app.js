import { getDataFromHTML } from './src/getDataFromHTML.js'
import { clickOnCell } from './src/clickOnCell.js'

const {rooks, knights, bishops, queens, kings, pawns, cells} = getDataFromHTML()

clickOnCell()