import {modelo1} from "../models/empleados.model.js"

const test = () => {
    console.log("conexion a empleados establecida")

    modelo1.create({
        name: 'Ricardo',
        apepat: 'Alba'
    })
}
export default test 