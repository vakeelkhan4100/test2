import mongoose from "mongoose"
const myschema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },   
    
    token: {
        type: String,
        required: false
    }
})
 export const user = mongoose.model("khans", myschema)
 export default user
