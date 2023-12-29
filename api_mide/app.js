const express = require('express')
const app = express()
app.use(express.json())

const errorHandler = require('./midelwares/errorHandler')
const rutasLibros = require('./routers/libros')


const port = 3000
app.use(errorHandler)
app.use('/libros',rutasLibros)
app.listen(port,()=>{
    console.log("puerto funcionando")
})

