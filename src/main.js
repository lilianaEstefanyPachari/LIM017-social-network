// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import { register } from './components/Register.js';
import { login } from './Components/Login.js';
import { home } from './Components/Home.js';

const rootDiv = document.getElementById('root');

const routes = {
    '/': login,
    '/register':register,
    '/home': home,
}

export const onNavigate = (pathname) => {
    window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
    );
    rootDiv.innerHTML=routes[pathname]();
};


const component = routes[window.location.pathname];

rootDiv.innerHTML=component();
const registerBtn=document.getElementById('registerP');

registerBtn.addEventListener('click',() => console.log("hola"));