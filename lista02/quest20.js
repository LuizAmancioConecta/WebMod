const menorNumero = (array) => Math.min(...array)

const mNumero = (array) => array.map(Number).reduce((a, b) => Math.min(a, b))

console.log(mNumero([10, 5, 35, 65])) // retornará 5
console.log(mNumero([5, -15, 50, 3])) // retornará -1