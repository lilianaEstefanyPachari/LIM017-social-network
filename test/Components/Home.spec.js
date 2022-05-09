import { home } from '../../src/Components/Home.js';
import { homeEvents } from '../../src/DOMevents.js';
import { signOut } from '../../src/lib/FirebaseUtils.js';
jest.mock('../../src/lib/FirebaseUtils.js');
jest.mock('../../src/routes.js');

// test de prueba, aun no testea nada
describe('Home', () => {
  it('debería llamar a la función mock de CERRAR SESIÓN', () => {
    document.body.innerHTML = '<div id="rootDiv"></div>';
    document.getElementById('rootDiv').innerHTML = home();
    //   expect(addDoc.mock.calls[0]).toEqual([]);
    const loginOutIcon = document.getElementById('logOutIcon');
    loginOutIcon.dispatchEvent(new Event('click'));
    homeEvents();
    console.log(signOut.mock);
    //   expect(signOut.mock.calls[0]).toEqual([{}]);
  });
});
