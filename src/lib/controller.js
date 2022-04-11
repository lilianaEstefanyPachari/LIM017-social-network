import { registerWithEmailFb } from "./firebaseMain.js";

export const registerWithEmail = (email,password) => {
    registerWithEmailFb(email,password)
    //    .then((email) => {
    //         console.log("este es el email: " + email);
    //         // ...
    //     })
       
}


