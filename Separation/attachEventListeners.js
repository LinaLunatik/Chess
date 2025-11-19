import { handleCellClick } from "./src/handleCellClick.js"

export const attachEventListeners = () => {

    const root = document.getElementById('root')
    const table = root.querySelector('table')

    if (table) {
        table.addEventListener('click', (event) => {
            const cell = event.target.closest('td')
            if (cell) { handleCellClick(cell) }
        })
    }
}