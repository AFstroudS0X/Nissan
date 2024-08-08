import {modelo5} from "../models/empleadodelmes.model.js"

const test = () => {
    console.log("conexion a empleadodemes establecida")

    modelo5.create({
        name: 'Diego',
        apepat: 'Martinez',
        apemat: 'Rodriguez',
        bestscore: 'two months'
    })
}
export default test 