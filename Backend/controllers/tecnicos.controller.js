import {modelo4} from "../models/tecnicos.model.js"

const test = () => {
    console.log("conexion a tecnicos establecida")

    modelo4.create({
        name: 'Daniel',
        apepat: 'Alvarez',
        area: 'maintenence'
    })
}
export default test 