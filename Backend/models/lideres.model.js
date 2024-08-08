import {Schema, model} from 'mongoose'

export const esquema3 = new Schema ({
    name: {
        type: String
    },
    apepat: {
        type: String
    },
    area: {
        type: String
 },
 schedule: {
    type: String
 }
})

export const modelo5 = new model ('lideres', esquema3)