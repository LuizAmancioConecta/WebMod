const filtrarPorQuantidadeDeDigitos = (array, tam) => array.filter(number => number.toString().length == tam)

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)) // retornará [38, 10, 11]
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)) // retornará [5, 9, 1]
