export const loginEvents = () => {
// btn registrate in login
  const registerOption = document.getElementById('registerP');
  registerOption.addEventListener('click', () => {
  // window.location.pathname = '/register';
  // onNavigate('/register');
  });
};
export const registerEvents = () => {
  const inputPasswordReg = document.getElementById('inputPassword');
  const inputNameReg = document.getElementById('inputName');
  if (inputNameReg.value === '') {
    document.getElementById('emptyInputName').innerText = '*Colocar su nombre de usuario';
  }
  if (inputPasswordReg.value === '') {
    document.getElementById('passError').innerText = '*Ingrese una contraseña';
  }
};

export const loginBtnHandler = () => {
  const inputEmailLogin = document.getElementById('inputEmail');
  const inputPassLogin = document.getElementById('inputPass');
  if (inputEmailLogin.value === '') {
    document.getElementById('emptyInputEmail').innerText = '*Coloque su correo electrónico';
  }
  if (inputPassLogin.value === '') {
    document.getElementById('emptyInputPass').innerText = '*Coloque su contraseña';
  }
};
