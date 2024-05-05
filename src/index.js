import express from 'express'
import mongoose from 'mongoose'
import usersController from './controllers/users.js'
import databaseConnection from './utils/database.js'

const app = express()
app.use(express.json())
const port = 3000

app.get("/", (request, response) => {
  response.status(200).send("Bem vindo à API de Usuarios!")
})

app.use('/users', usersController)

app.listen(port, async () => {
  await databaseConnection()
  console.log(`App running in http://localhost:${port}`)
})