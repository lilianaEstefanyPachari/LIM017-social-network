/* eslint-disable import/first */
/* eslint-disable func-call-spacing */
/* eslint-disable import/order */
/* eslint-disable no-spaced-func */

const fs = require ('fs');

document.body.innerHTML = fs.readFileSync('./src/index.html');

// importamos la funcion que vamos a testear
const { onNavigate } = require('../src/routes.js');

import { register } from '../src/Components/register.js';
import { login } from '../src/Components/Login.js';
import { home } from '../src/Components/Home';

jest.mock('../src/lib/firebaseUtils.js');

describe('Testing onNavigate', () => {
  const pathRegister = '/register';
  const pathLogin = '/';
  const pathHome = '/home';

  it('Debe renderizar la vista register', () => {
  // document.body.innerHTML = '<div id="root" ></div>';
  // const rootDiv = document.getElementById('root');
    const registerComponent = register();
    expect(onNavigate(pathRegister)).toEqual(registerComponent);
  });
  it('Debe renderizar la vista login', () => {
    const loginComponent = login();
    expect(onNavigate(pathLogin)).toEqual(loginComponent);
  });

  it('Debe renderizar la vista home', () => {
    const homeComponent = home();
    expect(onNavigate(pathHome)).toEqual(homeComponent);
  });
});

