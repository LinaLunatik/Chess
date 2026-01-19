import { FIGURE_IMAGE_PATH, STYLES } from "../const.js"

export const renderCell = (cell, { isSelected, isPossibleStep }) => {

    const color = cell.isBlack === null ? null : (cell.isBlack ? 'black' : 'white')
    let imgTag = ''

    if (cell.figure && color) {
        const src = FIGURE_IMAGE_PATH[cell.figure][color];
        if (src) {
            imgTag = `<img 
                        src="${src}" 
                        alt="${cell.figure}" 
                        class="${cell.figure}"
                    >`;
        }
    }

    let cellClass = 'cell'
    if (isSelected) { cellClass += ' ' + STYLES.selectedItem };
    if (isPossibleStep) { cellClass += ' ' + STYLES.possibleStep };

    return `<td 
                data-row="${cell.row}" 
                data-col="${cell.col}" 
                class="${cellClass}">
                    ${imgTag}
            </td>`
}