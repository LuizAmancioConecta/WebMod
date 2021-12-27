const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
const mulher = m => m.genero == 'F'
const chines = c => c.pais == 'China'

axios.get(url).then(res => {
    const funcionarios = res.data

    const func = funcionarios
                .filter(chines)
                .filter(mulher)
                .reduce(menorSalario)
    console.log(func)
})