import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    cpf: {type: String, required: true},
    idade: {type: Number, required: true},
    genero: {type: String, required: true},
    rg: {type: String, required: true},
    telefone: {type: String, required: true}


})

export default mongoose.models.User || mongoose.model('User', UserSchema)
