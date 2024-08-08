import {Schema, model} from 'mongoose'

export const esquema1 = new Schema ({
    name: {
        type: String
    },
    apepat: {
        type: String
    }
})

export const modelo1 = new model ('Empleados', esquema1)