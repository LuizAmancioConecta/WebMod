const arredondar = (num) => {
    aux = num
    while (aux % 5 != 0){
        aux++
    }
    if (num % 5 == 0 || ((aux - num) > 3)){
        return num
    }else {
        return aux
    }
    
}

const getBoletim = (nota) => {
    if (nota < 38) {
        return [nota, 'reprovado']
    } else {
        return [arredondar(nota), 'aprovado']
    }
}

console.log(getBoletim(37))