import { register } from '../../src/Components/register.js';
import { registerEvents } from '../../src/DOMevents.js';

jest.mock('../../src/lib/FirebaseUtils.js');
jest.mock('../../src/DOMevents.js');

describe('testing register component', () => {
  it('si los input de nombre y contraseña estan vacios devolverá un aviso', () => {
    document.body.innerHTML = '<div id="rootDiv"></div>';
    document.getElementById('rootDiv').innerHTML = register();
    document.getElementById('inputEmail').value = 'alguien@gmail.com';
    document.getElementById('inputName').value = '';
    document.getElementById('inputPassword').value = '';
    const buttonRegister = document.getElementById('buttonRegister');
    registerEvents();
    buttonRegister.dispatchEvent(new Event('click'));
    console.log(document.getElementById('emptyInputName'));
    expect(document.getElementById('emptyInputName').innerText).toBe('*Colocar su nombre de usuario');
    expect(document.getElementById('passError').innerText).toBe('*Ingrese una contraseña');
  });

  it('vuelve a la vista login', () => {
    document.body.innerHTML = '<div id="rootDiv"></div>';
    document.getElementById('rootDiv').innerHTML = register();
    const btnBackLogin = document.getElementById('backLogin');
    btnBackLogin.dispatchEvent(new Event('click'));
    expect(window.location.pathname).toEqual('/');
  });

});
