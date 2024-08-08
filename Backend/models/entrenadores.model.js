import {Schema, model} from 'mongoose'

export const esquema2 = new Schema ({
    name: {
        type: String
    },
    apepat: {
        type: String
    },
    area: {
        type: String
 }
})

export const modelo3 = new model ('Entrenadores', esquema2)