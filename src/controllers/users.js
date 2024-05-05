import { Router } from 'express'
import { getUsers, getUser, createUser, deleteUser, updateUser } from '../services/users.js'

const router = Router()

router.get("/", async (request, response) => {
    const users = await getUsers()
    return response.status(200).send(users)
})

router.post("/", async (request, response) => {
    const params = {
        nome: request.body.nome,
        email: request.body.email,
        cpf: request.body.cpf,
        idade: request.body.idade,
        genero: request.body.genero,
        rg: request.body.rg,
        telefone: request.body.telefone
        
    }
    const user = await createUser(params)
    return response.status(201).send(user)
})

router.get("/:id", async (request, response) => {
    const user = await getUser(request.params.id)
    return response.status(200).send(user)
})

router.delete("/:id", async (request, response) => {
    await deleteUser(request.params.id)
    
    return response.status(204).send()
})

router.put("/:id", async (request, response) => {

    const user = await updateUser(request.params.id, {
        nome: request.body.nome,
        email: request.body.email,
        cpf: request.body.cpf,
        idade: request.body.idade,
        genero: request.body.genero,
        rg: request.body.rg,
        telefone: params.telefone
    })
    
    return response.status(200).send(user)
})

export default router

