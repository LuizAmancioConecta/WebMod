const contarCaractere = (letra, frase) => {
    cont = 0
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == letra) {
            cont++
        }
    }
    return cont
}


console.log(contarCaractere("r", "A sorte favorece os audazes")) // retornará 2
console.log(contarCaractere("c", "Conhece-te a ti mesmo")) // retornará 1
