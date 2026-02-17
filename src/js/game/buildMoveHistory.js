import { STYLES } from "../const.js"

export const buildMoveHistory = (state) => {
    moves = state.moveHistory
        //есть массив объектов 
        // [{
        // figure: figure,
        // targetCell: {row, col},
        // type: 'move' | 'capture' | 'castling' | 'check' | 'checkmate'
        // }]
    
        // хочу фигуры отображать картинками
        // targetCell надо изменить с индексов на координаты шахматные


    return  `
                <div class="${STYLES.moveHistory}">
                    <div></div>
                </div>
            `
}