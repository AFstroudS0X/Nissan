import {modelo8} from "../models/empleadodelaño.model.js"

const test = () => {
    console.log("conexion a empleadodeaño establecida")

    modelo8.create({
        name: 'Saul',
        apepat: 'Acedo',
        apemat: 'Caducado',
        bestscore: 'five years'
    })
}
export default test 