const contadorA = require('./instancia_unica')
const contadorB = require('./instancia_unica')

const contadorC = require('./instancia_nova')()
const contadorD = require('./instancia_nova')()

contadorA.inc()
contadorA.inc()
contadorC.inc()
contadorC.inc()
console.log(`${contadorA.valor} ${contadorB.valor} \n${contadorC.valor} ${contadorD.valor}`)


