import { NAMES } from "./const.js"

export const getDataFromHTML = () => {

    const itemTypes = [
        NAMES.rook, 
        NAMES.knight, 
        NAMES.bishop, 
        NAMES.queen, 
        NAMES.king, 
        NAMES.blackPawn,
        NAMES.whitePawn]
    const items = {}
    const cells = document.querySelectorAll('td')

    for (let type of itemTypes) {
        items[`${type}s`] = document.querySelectorAll(`.${type}`)
    }

    return{items, cells}
}