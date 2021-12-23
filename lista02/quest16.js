const somarNumeros = (array) => {
    let soma = 0
    array.forEach(element => {
        soma += element
    })

    return soma
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))