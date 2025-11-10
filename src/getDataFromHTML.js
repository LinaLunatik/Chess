import { NAMES } from "./const.js"

export const getDataFromHTML = () => {

    const itemTypes = Object.values(NAMES)
    const items = {}
    const cells = document.querySelectorAll('td')

    for (let type of itemTypes) {
        items[`${type}s`] = document.querySelectorAll(`.${type}`)
    }

    return{items, cells}
}