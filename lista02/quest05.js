const inverso = (param) => {
    if (typeof(param) == "boolean") return !(param)
    else{
        return -(param)
    }
}

console.log(inverso(true))