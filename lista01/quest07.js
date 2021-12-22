const bhaskara = (a, b, c) => {
    d = delta(a,b,c)
    x1 = (-b + (d)**0.5)/(2*a)
    x2 = (-b - (d)**0.5)/(2*a)
    return [x1,x2] 
}

const delta = (a, b, c) => {
    console.log(b**2 - (4*a*c))
    return (b**2 - (4*a*c))
}

console.log(bhaskara(3,10,4))
