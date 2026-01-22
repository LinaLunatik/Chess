export const classNames = (...params) => {
    let result = []
    params.forEach(param => {
        if (
            param !== null &&
            typeof param !== 'object' &&
            typeof param !== 'function') {
            if (param) { result.push(param) }
        } else if (
            param !== null &&
            typeof param === 'object'
        ) {
            for (let key of Object.keys(param)) {
                if (param[key]) { result.push(key) }
            }
        }
    })
    return result.join(' ')
}
//params - массив бесконечный
