export const getCoordsOfCell = (cell) => {
    
    const row = cell.closest('tr');
    if (!row) return null;

    const table = row.closest('table');
    if (!table) return null;

    const cellsInRow = row.querySelectorAll('td');
    const rows = table.querySelectorAll('tr');

    const colIndex = Array.from(cellsInRow).indexOf(cell);
    const rowIndex = Array.from(rows).indexOf(row);

    return {colIndex, rowIndex}
}