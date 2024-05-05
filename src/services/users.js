import User from '../models/user.js'
import { TestaCPF } from './functions/TestaCPF.js';


export const getUsers = async () => {
    const users = await User.find()
    return users
}

export const getUser = async (id) => {
    const user = User.findById(id)
    return user
}

export const createUser = async (userData) => {
    const { nome, email, cpf, idade, genero, rg, telefone } = userData;

    //validação de CPF
    if (!TestaCPF(cpf)) {
        throw new Error('CPF inválido.');
    }

        //valida se o CPF já está em uso
        const existingUserByCPF = await User.findOne({cpf});
        if (existingUserByCPF) {
            throw new Error('Este CPF já está associado a outro usuário.');
        }

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error('Formato de email inválido.');
    }

        // Verificação adicional se o email já está em uso
        const existingUser = await User.findOne({email});
        if (existingUser) {
            throw new Error('Este email já está em uso.');
        }
 

    // Criação do novo usuário
    const user = new User({ nome, email, cpf, idade, genero, rg, telefone });
    await user.save();
    return user;
};

export const deleteUser = async (id) => {
    await User.findByIdAndDelete(id)
}

export const updateUser = async (id, params) => {

    //validação de CPF
    if (!TestaCPF(cpf)) {
        throw new Error('CPF inválido.');
    }

        //valida se o CPF já está em uso
        const existingUserByCPF = await User.findOne({cpf});
        if (existingUserByCPF) {
            throw new Error('Este CPF já está associado a outro usuário.');
        }

    //validação de email
    const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error('Formato de email inválido.');
    }
        //valida se o email já está em uso
       const existingUser = await User.findOne({email});
       if (existingUser && existingUser._id.toString() !== id) {
           throw new Error('Este email já está em uso.');
       }

    const user = await User.findByIdAndUpdate(id, {
        nome: params.nome,
        email: params.email,
        cpf: params.cpf,
        idade: params.idade,
        genero: params.genero,
        rg: params.rg,
        telefone: params.telefone
    }, {
        new: true
    })
    return user
}
