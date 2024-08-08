import {modelo6} from "../models/nomina.model"

const test = () => {
    console.log("conexion a nomina establecida")

    modelo6.create({
        salary: 'Carlos',
        ISR: 'none',
        overtime: 'next week'
    })
}
export default test 