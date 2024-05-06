import request from 'supertest';
import app from '../services/users.js';

describe('getUser', () => {
    it('mostra meus usuarios', async ()=>{
        const res = await request(app)
        .get('/users');

        expect(res.body).toHaveProperty( 'nome', 'email', 'cpf', 'idade', 'genero', 'rg', 'telefone')
    })
 })


