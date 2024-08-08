import {Schema, model} from 'mongoose'

export const esquema4 = new Schema ({
    salary: {
        type: String
    },
    ISR: {
        type: String
    },
    overtime: {
        type: String
    }
})

export const modelo6 = new model ('Nomina', esquema4)