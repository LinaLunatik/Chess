export const classNames = (...params) => {
    
    let result = params.reduce((acc, param) => {
        if (param !== null) {
            
            // если param - примитив
            if (
                typeof param !== 'object' &&
                typeof param !== 'function') {
                // сортируем только truthy значения 
                    if (param) {
                    acc.push(param)
                }
            } 
            
            // если param - объект
            else if (
                typeof param === 'object'
            ) {
                for (let key of Object.keys(param)) {
                    //сортируем только truthy ключи объекта
                    if (param[key]) {
                        acc.push(key)
                    }
                }
            }
        } return acc
    }, [])
    return result.join(' ')
}