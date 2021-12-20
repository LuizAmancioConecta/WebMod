notas = [1, 2, 3, 4 ,5 ,6, 7]


const notasBaixas = notas.filter(nota => nota < 7)
const notasMenorQue5 = nota => nota < 5

const notasBaixas2 = notas.filter(notasMenorQue5)

console.log(notasBaixas)  
console.log(notasBaixas2)