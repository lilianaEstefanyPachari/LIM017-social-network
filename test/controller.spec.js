// importamos la funcion que vamos a testear
const fs = require('fs');
document.body.innerHTML = fs.readFileSync('./src/index.html');
const { registerWithEmail } = require('../src/lib/controller.js');

//import { onNavigate } from '../src/routes.js'

jest.mock('../src/lib/firebaseMain.js');


describe('registar con email y contraseña', () => {
    it('debe retornar una promesa', () => {
        expect(typeof registerWithEmail).toBe('function');
    });
});