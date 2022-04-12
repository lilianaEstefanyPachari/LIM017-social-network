import { registerWithEmailFb, updateProfilefb, sendEmailfb, registerWithGoogleFb } from "./firebaseMain.js";

export const registerWithEmail = (email, password, name) => {
    registerWithEmailFb(email, password)
        .then(() => {
            updateProfilefb(name);
            sendEmailfb()
                .then(() => {
                    const showModalEmailVerification = document.getElementById('modalEmailV');
                    showModalEmailVerification.style.display = 'block';
                })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                document.getElementById('errorEmail').innerText = 'El email ya se encuentra registrado';
            } else if (errorMessage === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                document.getElementById('passError').innerText = 'La contraseña debe tener más de 6 caracteres';
            }
        });
    //    .then((email) => {
    //         console.log("este es el email: " + email);
    //         // ...
    //     })

}
export const registerWithGoogle = () => {
    registerWithGoogleFb();

}