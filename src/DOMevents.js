import { onNavigate } from "./main.js";

export const loginEvents = () => {
    //btn registrate in login
    console.log("login");
    const registerBtn = document.getElementById('registerP');
    registerBtn.addEventListener('click', () => {
        onNavigate('/register');
        registerEvents();
    });

};

export const registerEvents = () => {
    console.log("register");
    //btn login in register
    const loginBtn = document.getElementById('backLogin');
    loginBtn.addEventListener('click', () => {
        onNavigate('/');
        loginEvents();
    })
}