export const displayChessBoard = (html) => {
    
    const root = document.getElementById('root')

    if (root) { root.innerHTML = html }
}