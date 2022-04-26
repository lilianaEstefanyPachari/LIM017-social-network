// importamos la funcion que vamos a testear


//import { registerWithEmail } from '../src/lib/controller.js';
import { onNavigate } from '../src/routes.js'

jest.mock('../src/lib/firebaseMain.js');


describe('que rutee', () => {
    it('debería ser una función', () => {
        document.body.innerHTML = '<div id="root"></div>'
        expect(typeof onNavigate).toBe('function');
    });
});