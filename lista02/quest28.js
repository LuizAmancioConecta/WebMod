const segundoMaior = (array) => {
    const ordenado = array.sort((numeroA, numeroB) => numeroB - numeroA)
    console.log(ordenado)
    const segundo = array[1]

    return segundo
}


console.log(segundoMaior([12, 16, 1, 5])) // retornarĂ¡ 12
console.log(segundoMaior([8, 4, 5, 6])) // retornarĂ¡ 6