const funcaoDaSorte = (num) => {
    aleatorio = Math.floor(Math.random() * 11);
    if (num == aleatorio) return `Parabéns! O número sorteado foi o ${aleatorio}`
    else return `Que pena! O número sorteado foi o ${aleatorio}`
    
}


console.log(funcaoDaSorte(10)) // retornará "Parabéns! O número sorteado foi o 10"
console.log(funcaoDaSorte(5)) // retornará "Que pena! O número sorteado foi o 3"
console.log(funcaoDaSorte(5)) // retornará "Que pena! O número sorteado foi o 1"
