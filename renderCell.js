import { FIGURE_IMAGE_PATH, TYPE_TO_CLASS, STYLES } from "./src/const.js";

export const renderCell = (figure, row, col, { isSelected, isPossibleStep }) => {

    let imgTag = ''

    if (figure && figure.length === 2) {
        const color = figure[0];
        const type = figure[1];

        let className = TYPE_TO_CLASS[type];
        if (type === 'P') { className = color === 'b' ? 'blackPawn' : 'whitePawn' }

        const src = FIGURE_IMAGE_PATH[color][type];

        imgTag = `<img src="${src}" alt="${figure}" class="${className}">`;
    }

    let cellClass = 'cell'
    if (isSelected) { cellClass += ' ' + STYLES.selectedItem };
    if (isPossibleStep) { cellClass += ' ' + STYLES.possibleStep };

    return `<td data-row="${row}" data-col="${col}" class="${cellClass}">${imgTag}</td>`
}