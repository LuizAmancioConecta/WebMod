const removerPropriedade = (obj, remover) => {
    delete obj[remover]
    return obj
}
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao"))