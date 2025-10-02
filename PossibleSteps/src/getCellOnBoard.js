export const getCellOnBoard = (event) => {
    const cell = event.target.parentElement;
    const row = cell.parentElement;
    const td_row = row.querySelectorAll('td');
    const rows = document.querySelectorAll('tr');

    const cellIndex = Array.from(td_row).indexOf(cell);
    const rowIndex = Array.from(rows).indexOf(row);

    return {cell, rows, cellIndex, rowIndex}
}