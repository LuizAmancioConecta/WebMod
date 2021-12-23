const filtrarNumeros = (array) => array.filter(item => typeof item === "number")

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))