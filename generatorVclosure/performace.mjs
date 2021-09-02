import exportDefault from './generatorVclosure.mjs'

const { generatorGetInner, closureGetInner, generateSymmetricArray } = exportDefault

const PERFORMANCE_TEST_SIZE = 1000
const symmetricArray = generateSymmetricArray(PERFORMANCE_TEST_SIZE)

const generator = generatorGetInner(symmetricArray)
const closure = closureGetInner(symmetricArray)

const iterations = Math.pow(symmetricArray.length - 2, 2)

console.time('generator@' + iterations)
for (let i = 0; i < iterations; i++) {
    generator.next().value
}
console.timeEnd('generator@' + iterations)

console.time('closure@' + iterations)
for (let i = 0; i < iterations; i++) {
    closure().value
}
console.timeEnd('closure@' + iterations)
