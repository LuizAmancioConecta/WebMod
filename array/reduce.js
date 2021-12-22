const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

//reduce (previousValue, currentValue)
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce( (acumulado, atual) => {
    console.log(acumulado, atual)
    return acumulado + atual
})
console.log(resultado)
