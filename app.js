const rooks = document.querySelectorAll('.rook')
const knights = document.querySelectorAll('.knight')
const bishops = document.querySelectorAll('.bishop')
const queens = document.querySelectorAll('.queen')
const kings = document.querySelectorAll('.king')
const pawns = document.querySelectorAll('.pawn')

rooks.forEach(rook => { rook.addEventListener('click', possibleStepRook) })
knights.forEach(knight => { knight.addEventListener('click', possibleStepKnight) })
bishops.forEach(bishop => { bishop.addEventListener('click', possibleStepBishop) })
queens.forEach(queen => { queen.addEventListener('click', possibleStepQueen) })
kings.forEach(king => { king.addEventListener('click', possibleStepRookKing) })
pawns.forEach(pawn => { pawn.addEventListener('click', possibleStepPawn) })

function possibleStepRook(event) {
    const cell = event.target.parentElement;
    const row = cell.parentElement;
    const td_row = row.querySelectorAll('td');
    const rowIndex = Array.from(td_row).indexOf(cell)

    cell.classList.toggle('selectedItem');

    if (cell.classList.contains('selectedItem')) {
        td_row.forEach(td => {
            if (td !== cell && !td.classList.contains('field-td')) {
                td.classList.add('possibleStep')
            }
        });

        const td = document.querySelectorAll('tr')
        td.forEach(row => {
            if (!row.classList.contains('field-tr')) {
                row.children[rowIndex].classList.add('possibleStep')
            }
        })
    } else {
        td_row.forEach(td => { if (td !== cell) { td.classList.remove('possibleStep') } });
        document.querySelectorAll('tr').forEach(row => {
            row.children[rowIndex].classList.remove('possibleStep')
        })
    }
}

function possibleStepKnight(event) {
    const cell = event.target.parentElement; //ячейка с конем
    const row = cell.parentElement;         //строка с конем
    const td_row = row.querySelectorAll('td'); //все ячейки строки с конем
    const cellIndex = Array.from(td_row).indexOf(cell) //индекс ячейки
    const rows = document.querySelectorAll('tr') //получаем все строки таблицы
    const rowIndex = Array.from(rows).indexOf(row) //получаем индекс строки с конем

    const wasSelected = cell.classList.contains('selectedItem')
    cell.classList.toggle('selectedItem'); //выделение коня

    if (wasSelected) {
        document.querySelectorAll('.possibleStep').forEach(el => { el.classList.remove('possibleStep') })
    } else {
        if (cell.classList.contains('selectedItem')) {
            KnightStep1(rows, rowIndex, cellIndex);
            KnightStep2(rows, rowIndex, cellIndex);
            KnightStep3(rows, rowIndex, cellIndex);
            KnightStep4(rows, rowIndex, cellIndex);
            KnightStep5(rows, rowIndex, cellIndex);
            KnightStep6(rows, rowIndex, cellIndex);
            KnightStep7(rows, rowIndex, cellIndex);
            KnightStep8(rows, rowIndex, cellIndex)
        }
    }

    function KnightStep1(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex + 2
        const targetCellIndex = cellIndex + 1

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
    function KnightStep2(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex + 2
        const targetCellIndex = cellIndex - 1

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
    function KnightStep3(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex + 1
        const targetCellIndex = cellIndex - 2

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
    function KnightStep4(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex - 1
        const targetCellIndex = cellIndex - 2

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
    function KnightStep5(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex - 2
        const targetCellIndex = cellIndex - 1

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
    function KnightStep6(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex - 2
        const targetCellIndex = cellIndex + 1

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
    function KnightStep7(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex - 1
        const targetCellIndex = cellIndex + 2

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
    function KnightStep8(rows, rowIndex, cellIndex) {
        const targetRowIndex = rowIndex + 1
        const targetCellIndex = cellIndex + 2

        if (targetRowIndex >= 1 && targetRowIndex <= 8 &&
            targetCellIndex >= 1 && targetCellIndex <= 8) {
            const stepRow = rows[targetRowIndex]
            const stepCell = stepRow.children[targetCellIndex]
            stepCell.classList.add('possibleStep')
        }
    }
}

function possibleStepBishop(event) {
    const cell = event.target.parentElement;
    const row = cell.parentElement;
    const td_row = row.querySelectorAll('td');
    const cellIndex = Array.from(td_row).indexOf(cell)
    const rows = document.querySelectorAll('tr')
    const rowIndex = Array.from(rows).indexOf(row)

    const wasSelected = cell.classList.contains('selectedItem')
    cell.classList.toggle('selectedItem');

    if (wasSelected) {
        document.querySelectorAll('.possibleStep').forEach(el => { el.classList.remove('possibleStep') })
    } else {
        if (cell.classList.contains('selectedItem')) {
            BishopSteps(rows, rowIndex, cellIndex)
        }
    }

    function BishopSteps(rows, rowIndex, cellIndex) {
        const directions = [
            [-1, -1],
            [-1, 1],
            [1, -1],
            [1, 1]
        ]

        directions.forEach(([rowDir, cellDir]) => {
            for (i = 1; i < 8; i++) {
                const targetRow = rowIndex + rowDir * i;
                const targetCell = cellIndex + cellDir * i;

                if (targetRow >= 1 && targetRow <= 8 && targetCell >= 1 && targetCell <= 8) {
                    const targetCellElement = rows[targetRow].children[targetCell]
                    targetCellElement.classList.add('possibleStep')
                }
            }
        })
    }
}

function possibleStepQueen(event) {
    const cell = event.target.parentElement;
    const row = cell.parentElement;
    const td_row = row.querySelectorAll('td');
    const cellIndex = Array.from(td_row).indexOf(cell)
    const rows = document.querySelectorAll('tr')
    const rowIndex = Array.from(rows).indexOf(row)

    const wasSelected = cell.classList.contains('selectedItem')
    cell.classList.toggle('selectedItem');

    if (wasSelected) {
        document.querySelectorAll('.possibleStep').forEach(el => { el.classList.remove('possibleStep') })
    } else {
        if (cell.classList.contains('selectedItem')) {
            QueenSteps(rows, rowIndex, cellIndex)
        }
    }

    function QueenSteps(rows, rowIndex, cellIndex) {
        const directions = [
            [-1, -1],
            [-1, 1],
            [1, -1],
            [1, 1],
            [-1, 0],
            [0, -1],
            [0, 1],
            [1, 0]
        ]

        directions.forEach(([rowDir, cellDir]) => {
            for (i = 1; i < 8; i++) {
                const targetRow = rowIndex + rowDir * i;
                const targetCell = cellIndex + cellDir * i;

                if (targetRow >= 1 && targetRow <= 8 && targetCell >= 1 && targetCell <= 8) {
                    const targetCellElement = rows[targetRow].children[targetCell]
                    targetCellElement.classList.add('possibleStep')
                }
            }
        })
    }

}

function possibleStepRookKing(event) {
    const cell = event.target.parentElement;
    const row = cell.parentElement;
    const td_row = row.querySelectorAll('td');
    const cellIndex = Array.from(td_row).indexOf(cell)
    const rows = document.querySelectorAll('tr')
    const rowIndex = Array.from(rows).indexOf(row)

    const wasSelected = cell.classList.contains('selectedItem')
    cell.classList.toggle('selectedItem');

    if (wasSelected) {
        document.querySelectorAll('.possibleStep').forEach(el => { el.classList.remove('possibleStep') })
    } else {
        if (cell.classList.contains('selectedItem')) {
            KingSteps(rows, rowIndex, cellIndex)
        }
    }

    function KingSteps(rows, rowIndex, cellIndex) {
        const directions = [
            [-1, -1],
            [-1, 1],
            [1, -1],
            [1, 1],
            [-1, 0],
            [0, -1],
            [0, 1],
            [1, 0]
        ]

        directions.forEach(([rowDir, cellDir]) => {
            const targetRow = rowIndex + rowDir;
            const targetCell = cellIndex + cellDir;

            if (targetRow >= 1 && targetRow <= 8 && targetCell >= 1 && targetCell <= 8) {
                const targetCellElement = rows[targetRow].children[targetCell]
                targetCellElement.classList.add('possibleStep')
            }
        })
    }
}

function possibleStepPawn(event) {
    const cell = event.target.parentElement; //ячейка с пешкой
    const row = cell.parentElement;         //строка с пешкой
    const td_row = row.querySelectorAll('td'); //все ячейки строки с пешкой
    const cellIndex = Array.from(td_row).indexOf(cell)
    const rows = document.querySelectorAll('tr') //получаем все строки таблицы
    const rowIndex = Array.from(rows).indexOf(row) //получаем индекс строки с пешкой

    const wasSelected = cell.classList.contains('selectedItem')
    cell.classList.toggle('selectedItem'); //выделение пешки

    if (wasSelected) {
        document.querySelectorAll('.possibleStep').forEach(el => { el.classList.remove('possibleStep') })
    } else {
        if (cell.classList.contains('selectedItem')) {
            if (cell.classList.contains('black')) {
                BlackPawnSteps(rows, rowIndex, cellIndex)
            } else if (cell.classList.contains('white')) {
                WhitePawnSteps(rows, rowIndex, cellIndex)
            }
        }
    }

    function BlackPawnSteps(rows, rowIndex, cellIndex) {
        const next1RowBlack = rows[rowIndex + 1]
        const next2RowBlack = rows[rowIndex + 2]
        const next1CellBlack = next1RowBlack.children[cellIndex]
        const next2CellBlack = next2RowBlack.children[cellIndex]

        next1CellBlack.classList.add('possibleStep')
        next2CellBlack.classList.add('possibleStep')
    }

    function WhitePawnSteps(rows, rowIndex, cellIndex) {
        const next1RowWhite = rows[rowIndex - 1]
        const next2RowWhite = rows[rowIndex - 2]
        const next1CellWhite = next1RowWhite.children[cellIndex]
        const next2CellWhite = next2RowWhite.children[cellIndex]

        next1CellWhite.classList.add('possibleStep')
        next2CellWhite.classList.add('possibleStep')
    }
}