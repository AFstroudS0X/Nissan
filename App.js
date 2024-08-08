import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {testbecarios} from './Backend/controllers/becarios.controller.js'
import {testempleadodeaño} from './Backend/controllers/empleadodelaño.controller.js'
import {testempleadodemes} from './Backend/controllers/empleadodelmes.controller.js'
import {testempleados} from './Backend/controllers/empleados.controller.js'
import {testentrenadores} from './Backend/controllers/entrenadores.controller.js'
import {testlideres} from './Backend/controllers/lideres.controller.js'
import {testnomina} from './Backend/controllers/nomina.controller.js'
import {testtecnicos} from './Backend/controllers/tecnicos.controller.js'
dotenv.config();

mongoose.connect(process.env.url)
.then (() => {
    console.log("conexion establecida")
})
.catch ((error) => {
    console.log("error de conexion", error)
})

const app = express ();
app.use (cors());

app.listen(4001,() => {
    console.log("conexion al seerver establecida")
})

testbecarios()
testempleadodeaño()
testempleadodemes()
testempleados()
testentrenadores()
testlideres()
testnomina()
testtecnicos()

