/* Para resolver esse problema, basta mudar a string de configuração. 
Você pode optar por personalizá-la de acordo com o dia e hora que você está realizando o exercício, 
ou utilizar a string '/5 * * * * *', que simplesmente
executará o código de 5 em 5 segundos independente de minuto, hora, dia do mês, mês e dia da semana em que você está testando o algoritmo. */
const porta = 3003
const express = require('express')
const app = express()
const bancoDeDados = require('./banco_de_dados')
// Express v4.16.0 e superior
// --------------------------

 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/* //funciona para qualquer requisição
app.use((req, res, next) => {
    console.log('Middleware1')
    next()
}) */

/* app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 })// Converte para JSON
}) */
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
    next()
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})