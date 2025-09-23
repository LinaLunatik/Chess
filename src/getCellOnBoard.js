export function getCellOnBoard(event) {
    const cell = event.target.parentElement;
    const row = cell.parentElement;
    const td_row = row.querySelectorAll('td');
    const cellIndex = Array.from(td_row).indexOf(cell)
    const rows = document.querySelectorAll('tr')
    const rowIndex = Array.from(rows).indexOf(row)

    return {
        cell: cell,
        rows: rows,
        cellIndex: cellIndex,
        rowIndex: rowIndex
    }
}