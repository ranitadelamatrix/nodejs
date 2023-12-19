const express = require('express')

const app = express()
app.use(express.json())

const librosRutas = require('./routers/libros');
const errorHandler = require('./middlewares/errorHandler');



const port = 3000

app.use('/libros',librosRutas)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`servidor iniciado en puerto ${port}`)
})