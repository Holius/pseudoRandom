import exportDefault from './generatorVclosure.mjs'

const { generatorGetInner, closureGetInner, generateSymmetricArray } = exportDefault

for (let i = 3; i < 15; i++) {
    const symmetricArray = generateSymmetricArray(i)
    const iterations = Math.pow(symmetricArray.length - 2, 2)
    const expectedArray = generateExpectedArray(symmetricArray)
    console.log(expectedArray)
    const closure = closureGetInner(symmetricArray)
    let pass = true

    for (let i = 0; i < iterations; i++) {
        if (closure().value !== expectedArray[i]) {
            pass = false 
            break
        }
    }
    console.log( pass ? '\x1b[32mClosure Array at size ' + i + ' has PASSED\x1b[0m' : '\x1b[31mClosure Array at size ' + i + ' has FAILED\x1b[0m')
}

//starts at 3 because that's the minimum valid value
for (let i = 3; i < 15; i++) {
    const symmetricArray = generateSymmetricArray(i)
    const iterations = Math.pow(symmetricArray.length - 2, 2)
    const expectedArray = generateExpectedArray(symmetricArray)
    const generator = generatorGetInner(symmetricArray)
    let pass = true
    for (let i = 0; i < iterations; i++) {
        if (generator.next().value !== expectedArray[i]) {
            pass = false 
            break
        }
    }
    console.log( pass ? '\x1b[32mGenerator Array at size ' + i + ' has PASSED\x1b[0m' : '\x1b[31mGenerator Array at size ' + i + ' has FAILED\x1b[0m')
}

//get all values of array that are not on the border
function generateExpectedArray (original_a) {
    const a = []
    for (let child_a of original_a) {
        a.push([...child_a])
    }

    a.shift()
    a.pop()

    for (let i = 0; i < a.length; i++) {
        a[i].shift()
        a[i].pop()
    }

    return a.flat()
}

