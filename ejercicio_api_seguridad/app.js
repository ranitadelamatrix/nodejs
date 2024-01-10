const express = require('express')
const app = express()
app.use(express.json())
const {auth} = require('express-oauth2-jwt-bearer')

const autenticacion = auth({audience: "http://localhost:3000/api/productos",
issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
tokenSigningAlg: "RS256",})

const librosRouter = require('./router/libros')
const errorHandler = require('./midelwares/errorHandler')


app.use('/libros',librosRouter)

app.use(errorHandler)
const port = 3000
app.listen(port, ()=>{
    console.log("funcionando puerto")
})