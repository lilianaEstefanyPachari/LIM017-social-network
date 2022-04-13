import { onNavigate } from "./main.js";
import { registerWithEmail, registerWithGoogle } from './lib/controller.js';


export const loginEvents = () => {
    //btn registrate in login
    console.log("login");
    const registerOption = document.getElementById('registerP');
    registerOption.addEventListener('click', () => {
        onNavigate('/register');
        registerEvents();

    });

};

export const registerEvents = () => {
    console.log("register");
    //evento del boton de resgitrar nuevo usuario
    const btnRegister = document.getElementById('buttonRegister');
    btnRegister.addEventListener('click', () => {
        const inputEmailReg = document.getElementById('inputEmail');
        const inputPasswordReg = document.getElementById('inputPassword');
        const inputNameReg = document.getElementById('inputName');
        if (inputNameReg.value === '') {
            document.getElementById('emptyInputName').innerText = '*Colocar su nombre de usuario';
        }
        if (inputPasswordReg.value === '') {
            document.getElementById('passError').innerText = '*Ingrese una contraseña';
        }
        registerWithEmail(inputEmailReg.value, inputPasswordReg.value, inputNameReg.value);
    });
    //evento del boton registrar con google
    const btnGoogle = document.getElementById('googleImg');
    btnGoogle.addEventListener('click', () => {
        registerWithGoogle();

    });

    //evento de opcion volver a la vista login
    const loginBtn = document.getElementById('backLogin');
    loginBtn.addEventListener('click', () => {
        onNavigate('/');
        loginEvents();
    })

}