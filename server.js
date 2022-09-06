const express = require('express')
const app = express()
const port = 3000

app.use(express.static('css'))
app.use(express.static('assets'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/academia', (req, res) => {
  res.sendFile(__dirname + "/pages/academia.html")
})

app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + "/pages/cadastro.html")
})

app.get('/carrinho', (req, res) => {
    res.sendFile(__dirname + "/pages/carrinho.html")
})

app.get('/feminino', (req, res) => {
    res.sendFile(__dirname + "/pages/feminino.html")
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/pages/login.html")
})

app.get('/masculino', (req, res) => {
    res.sendFile(__dirname + "/pages/masculino.html")
})

app.get('/modaPraia', (req, res) => {
    res.sendFile(__dirname + "/pages/modaPraia.html")
})

app.get('/paginaDeProduto', (req, res) => {
    res.sendFile(__dirname + "/pages/paginaDeProduto.html")
})


app.listen(port, () => {
})
console.log(`Example app listening on port ${port}`)