import {modelo2} from "../models/becarios.model.js"

const test = () => {
    console.log("conexion a becarios establecida")

    modelo2.create({
        name: 'Alejandro',
        apepat: 'Floriano'
    })
}
export default test 