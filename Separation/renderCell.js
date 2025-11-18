import { FIGURE_IMAGE_PATH } from "./src/const.js";

export const renderCell = (piece, row, col) => {

    let imgTag = ''

    if (piece && piece.length === 2) {
        const color = piece[0];
        const type = piece[1];

        const src = FIGURE_IMAGE_PATH[color][type];

        imgTag = `<img src="${src}" alt="${piece}" class="${type}">`
    }
    return `<td data-row="${row}" data-col="${col}">${imgTag}</td>`
}