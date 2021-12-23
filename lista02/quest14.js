const receberSomenteOsParesDeIndicesPares = (array) => array.filter(num => num % 2 == 0).filter(num => array.indexOf(num) % 2 == 0 )

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))