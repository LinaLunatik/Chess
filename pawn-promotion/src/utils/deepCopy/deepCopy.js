export const deepCopy = (param) => {
    // Случай 1. Обработка null
    if (param === null) return null

    // Случай 2. Обработка примитивов
    else if (
        typeof param !== 'object' &&
        typeof param !== 'function'
    ) return param

    // Случай 3. Обработка массивов
    else if (Array.isArray(param)) {
        const paramArray = param.map(item => deepCopy(item))
        return paramArray
    }

    // Случай 4. Обработка объектов
    else if (typeof param === 'object') {
        
        const paramObject = {}
        for (let key of Object.keys(param)) {
            const value = param[key]
            const copiedValue = deepCopy(value)

            paramObject[key] = copiedValue
        }
        return paramObject
    }
    return param
}