import {modelo3} from "../models/entrenadores.model.js"

const test = () => {
    console.log("conexion a entrenadores establecida")

    modelo3.create({
        name: 'Carlos',
        apepat: 'Soriano',
        area: 'training'
    })
}
export default test 