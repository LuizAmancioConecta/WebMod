let formata = (valor) => {
    return `R$ ${valor.toFixed(2)}`
}

console.log(formata(0.30000000000000004))