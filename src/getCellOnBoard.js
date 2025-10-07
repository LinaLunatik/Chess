export const getCellOnBoard = (event) => {
    const cell = event.target.parentElement;
    const row = cell.parentElement;
    const tdRow = row.querySelectorAll('td');
    const rows = document.querySelectorAll('tr');

    const cellIndex = Array.from(tdRow).indexOf(cell);
    const rowIndex = Array.from(rows).indexOf(row);

    return {cell, rows, cellIndex, rowIndex}
}