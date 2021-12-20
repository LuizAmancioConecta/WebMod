const defineTriang = (a, b, c) => {
    if (a == b && b == c){
        return 'equilatero'
    } else if(a == b || b == c || a == c){
        return 'isosceles'
    }else{
        return 'escaleno'
    }
}

console.log(defineTriang(1,4,3))