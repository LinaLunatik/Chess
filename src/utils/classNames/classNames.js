export const classNames = (...params) => {
    
    let result = params.reduce((acc, param) => {
        if (param !== null) {
            if (
                typeof param !== 'object' &&
                typeof param !== 'function') {
                if (param) {
                    acc.push(param)
                }
            } else if (
                typeof param === 'object'
            ) {
                for (let key of Object.keys(param)) {
                    if (param[key]) {
                        acc.push(key)
                    }
                }
            }
        } return acc
    }, [])
    return result.join(' ')
}