const removerVogais = (palavra) => {
    for (let i = 0; i < palavra.length; i++) {
        if (/^[aeiou]$/i.test(palavra[i])) {
            palavra = palavra.replace(palavra[i],'')
        }
    }
    return palavra
}


console.log(removerVogais("Cod3r")) // retornará "Cd3r"
console.log(removerVogais("Fundamentos")) // retornará "Fndmnts"
