const fs = require('fs');
document.body.innerHTML = fs.readFileSync('./src/index.html');

// importamos la funcion que vamos a testear
const { registerWithEmail } = require('../../src/lib/controller.js');
//import { createUserWithEmailAndPassword } from '../src/lib/firebaseUtils';


//darle la ruta del archivo a mockear
jest.mock('../../src/lib/firebaseUtils.js');

//test
describe('registerWithEmail testing', () => {
    it('debe ser una función', () => {
        expect(typeof registerWithEmail).toBe('function');
    });
});




