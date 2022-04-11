import { onNavigate } from "./main.js";
import { registerWithEmailFb } from "./firebaseMain.js";
export const loginEvents = () => {
    //btn registrate in login
    console.log("login");
    const registerBtn = document.getElementById('registerP');
    registerBtn.addEventListener('click', () => {
        onNavigate('/register');
        registerEvents();

    });

};
export const registerWithEmail = () => {
    const inpuEmailValue = document.getElementById('inputEmail');
    const inputPassword = document.getElementById('inputPassword');
    const btnRegister = document.getElementById('buttonRegister');
    btnRegister.addEventListener('click', registerWithEmailFb(inpuEmailValue.value, inputPassword.value));
}

export const registerEvents = () => {
    console.log("register");
    //btn login in register
    const loginBtn = document.getElementById('backLogin');
    loginBtn.addEventListener('click', () => {
        onNavigate('/');
        loginEvents();
    })
}