const inverter = (obj) => Object.keys(obj).map(chave => [ obj[chave], chave])

console.log(inverter({ a: 1, b: 2, c: 3})) // retornará { 1: "a", 2: "b", 3: "c"})