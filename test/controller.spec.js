const fs = require('fs');
document.body.innerHTML = fs.readFileSync('./src/index.html');

// importamos la funcion que vamos a testear
const { registerWithEmail } = require('../src/lib/controller.js');

import { registerWithEmailFb } from '../src/lib/firebaseMain.js';

//darle la ruta del archivo a mockear
jest.mock('../src/lib/firebaseUtils.js');

//test
describe('registerWithEmail testing', () => {
    it('debe ser una función', () => {
        expect(typeof registerWithEmail).toBe('function');
    });
});

describe('registerWithEmailFb testing',() => {
    it('debe llamar a la funcion con los argumentos esperados', () => {
       console.log('pruebaaa test', registerWithEmailFb('lili@gmail.com', '123456')) 

    })
});

