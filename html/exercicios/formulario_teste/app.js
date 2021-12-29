


const { response } = require('express');
const express = require('express')
const app = express()
const port = 3003

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Parabéns</h1>')
})

app.post('/usuarios/:id',(req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Usuário cadastrado</h1>')
})

app.listen(port, (req, res, next)  => {
    console.log(`Server is listening to port:${port}`)
})
