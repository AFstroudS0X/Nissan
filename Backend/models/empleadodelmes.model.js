import {Schema, model} from 'mongoose'

export const esquema5 = new Schema ({
    name: {
        type: String
    },
    apepat: {
        type: String
    },
    apemat: {
        type: String
    },
    bestscore: {
        type: String
    }
})

export const modelo7 = new model ('empleadodelmes', esquema5)