export const getDataFromHTML = () => {
    
    const itemTypes = ['rook', 'knight', 'bishop', 'queen', 'king', 'blackPawn', 'whitePawn']
    const items = {}
    const cells = document.querySelectorAll('td')

    for (let type of itemTypes) {
        items[`${type}s`] = document.querySelectorAll(`.${type}`)
    }

    return{items, cells}
}