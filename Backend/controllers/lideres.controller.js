import {modelo5} from "../models/lideres.model.js"

const test = () => {
    console.log("conexion a lideres establecida")

    modelo5.create({
        name: 'Carlos',
        apepat: 'Soriano',
        area: 'training',
        schedule: 'matutine'
    })
}
export default test 