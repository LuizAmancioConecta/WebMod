const anoBissexto = (num) => {
    return (num % 4 == 0 && num % 100 != 0 || num % 400 == 0) 
}

console.log(anoBissexto(2016))