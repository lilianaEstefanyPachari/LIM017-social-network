// Este es el punto de entrada de tu aplicacion
import { register } from './Components/register.js';
import { login } from './Components/Login.js';
import { home } from './Components/Home.js';
import { loginEvents, registerEvents } from './DOMevents.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': login,
  '/register': register,
  '/home': home,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname]();
};

const component = routes[window.location.pathname];

// onpopstate guarda el historial de navegacion dentro del url
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]();
  if (window.location.pathname === '/') {
    loginEvents();
  } else if (window.location.pathname === '/register') {
    registerEvents();
  }
};

rootDiv.innerHTML = component();
loginEvents();
