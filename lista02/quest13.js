const objetoParaArray = (obj) => Object.keys(obj).map(chave => [chave, obj[chave]])



console.log(
    objetoParaArray({
        nome: "Maria",
        profissao: "Desenvolvedora de software"
    }))