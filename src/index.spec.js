const app = require('./index.js');
const request = require("supertest");

describe('Teste de endpoint', () => {
    it('GET na rota principal', async () => {
        const res = await fetch('http://localhost:3000/users')
        const data = await res.json();
        
        console.log(data); 

        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);
        expect(data[0]).toHaveProperty('_id');
    })
})