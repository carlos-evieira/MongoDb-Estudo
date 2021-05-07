const express = require ('express')
const mongoose = require('mongoose')
const routes = require ("./routes")
const cors = require ("cors")
const app = express()

mongoose.connect('mongodb+srv://root:root@projetoteste.1lmxs.mongodb.net/projeto-teste',
 {useNewUrlParser:true, useUnifiedTopology: true}
 )

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(3000, ()=> console.log("Servidor Rodando na porta 3000"))