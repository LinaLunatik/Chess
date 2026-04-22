import { OPPOSITE_COLORS } from "../js/const.js"

export const getOppositeColor = (color) => {
    if (!OPPOSITE_COLORS[color]) 
        throw new Error(`Некорректный цвет ${color}`);
    
    return OPPOSITE_COLORS[color]
}