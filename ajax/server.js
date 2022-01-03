const port = 8080
const express = require('express')
const app = express()

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('.'))
app.post('upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluido com sucesso')
    })
})

app.post('/formulario', (req, res) => {
     res.send({
         ...req.body,
         id: 7
     })
})



app.get('/parOuImpar', (req, res) => {
    /* receber dados do front end
    req.body 
    req.query
    req.params
    */
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})


app.listen(port, () => console.log(`Server is listening to port ${port}`))