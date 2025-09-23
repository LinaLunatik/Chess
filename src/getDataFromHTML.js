export function getDataFromHTML() {
    const rooks = document.querySelectorAll('.rook')
    const knights = document.querySelectorAll('.knight')
    const bishops = document.querySelectorAll('.bishop')
    const queens = document.querySelectorAll('.queen')
    const kings = document.querySelectorAll('.king')
    const pawns = document.querySelectorAll('.pawn')
    const cells = document.querySelectorAll('td')

    return {
        rooks: rooks,
        knights: knights,
        bishops: bishops,
        queens: queens,
        kings: kings,
        pawns: pawns,
        cells: cells
    }
}