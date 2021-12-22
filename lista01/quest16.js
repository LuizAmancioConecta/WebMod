const calculadora = (x, op, y) => {
    switch (op){
        case '+':
            return x+y
        case '-':
            return x-y
        case '*':
            return x*y
        case '/':
            return x/y
    }
}

console.log(calculadora(1,'*',2))