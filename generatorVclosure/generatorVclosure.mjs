export default { generatorGetInner, closureGetInner, generateSymmetricArray}

function* generatorGetInner(arr) {
    if (validateArraySymmetry(arr) === false) throw('Expected array to have symmetry')
    if (arr.length < 3) throw('Expected array to have length of 3 or more')

    let h = 1
    let v = 1
    const size = arr.length
 while (h !== size - 1) {
    const result = arr[h][v]
    if (v === size - 2) {
        h++  
        v = 1
    } else {
        v++
    }
        yield result
    }
    return arr[h][v]
}

function closureGetInner (arr) {
    if (validateArraySymmetry(arr) === false) throw('Expected array to have symmetry')
    if (arr.length < 3) throw('Expected array to have length of 3 or more')
    let h = 1
    let v = 1
    const size = arr.length
    let hasIterated = false
    return function closureInngerGetInner () {
        if (hasIterated) return { value: undefined, done: true}
        const result = arr[h][v]
        if (v === size - 2) {
            h++  
            v = 1
        } else v++
        if (h === size - 1) hasIterated = true
        return { value: result, done: false}
    }
}

function generateSymmetricArray(size, start = 0) {
    const a = []
    let current = start
    for (let i = 0; i < size; i++) {
        const a_child = []
        for (let t = 0; t < size; t++) {
            a_child.push(current)
            current++
        }
        a.push(a_child)
    }
    return a
}

function validateArraySymmetry (arr) {
    if (Array.isArray(arr) === false) return false
    const length = arr.length
    for (const a of arr) {
        if (a.length !== length || Array.isArray(arr) === false) return false
    }
    return true
}