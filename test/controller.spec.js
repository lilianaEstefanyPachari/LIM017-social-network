// importamos la funcion que vamos a testear


import { registerWithEmail } from '../src/lib/controller.js';

jest.mock('../src/lib/firebaseMain.js');


describe('Registarse con email y contraseña', () => {
    it('debería ser una función', () => {
        expect(typeof registerWithEmail).toBe('function');
    });
});