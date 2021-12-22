const toInt = (array) => {
    for(let i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i])
    }
    return array
}

const verPontos = (points) => {
    recorde = points[0]
    pior = points[0]
    pontuacao = [0,0]
    for (let i = 0; i < points.length; i++) {
        console.log(points[i])
        if (recorde < points[i]) {
            recorde = points[i]
            pontuacao[0] += 1
        }
        else if (pior > points[i]) {
            pior = points[i]
            pontuacao[1] = i
        }
    }
    return pontuacao
}

pontStr = "10 20 20 8 25 3 0 30 1"
points = pontStr.split(' ')
points = toInt(points)


console.log(verPontos(points))