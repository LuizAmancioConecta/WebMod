const getFatorial = (num) => {
    let fatorial = num
    for (let i = 1; i < num; i++) {
        fatorial *= i
    }
    return fatorial
}

console.log(getFatorial(2))