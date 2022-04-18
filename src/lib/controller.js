import { registerWithEmailFb, updateProfilefb, sendEmailfb, registerWithGoogleFb, loginFb, logOutfb } from "./firebaseMain.js";
import { onNavigate } from "../main.js";
import { loginEvents, homeEvents } from "../DOMevents.js";

export const registerWithEmail = (email, password, name, photo) => {
    registerWithEmailFb(email, password)
        .then(() => {
            updateProfilefb(name, photo);
            sendEmailfb()
                .then(() => {
                    const showModalEmailVerification = document.getElementById('modalEmailV');
                    const hideModal = document.getElementById('closeModal');
                    showModalEmailVerification.style.display = 'block';
                    hideModal.addEventListener('click', () => {
                        showModalEmailVerification.style.display = 'none';
                    })
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
            } else if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
                document.getElementById('errorEmail').innerText = '*Coloque su email';
            }
        });

}
export const registerWithGoogle = () => {
    registerWithGoogleFb()
        .then((res) => {
            onNavigate('/home');
            homeEvents();
            const userProfile = document.getElementById('profileContainer');
            const newPost = document.getElementById('postContainer');

            userProfile.innerHTML = `<img src="./img/pape.png" alt="fotode perfil"> <p>${res.userName}</p>`
            newPost.innerHTML = `<img src="">
            <input type="text" class="postInput"placeholder="¡Hola! ¿Qué quieres compartir?">
            <button class="btnShare">Publicar</button>`;
        })

}
export const login = (email, password) => {
    loginFb(email, password)
        .then((res) => {
            console.log(res)
            if (res.userState === false) {
                logOutfb();
                onNavigate('/');
                loginEvents();
                const showModalLogin = document.getElementById('modalLogIn');
                const closeModalLogin = document.getElementById('closeModalLogIn');
                showModalLogin.style.display = 'block';
                closeModalLogin.addEventListener('click', () => {
                    showModalLogin.style.display = 'none';
                })
            } else {
                onNavigate('/home');

                const userProfile = document.getElementById('profileContainer');
                const newPost = document.getElementById('postContainer');

                userProfile.innerHTML = `<img src="${res.userPhoto}" alt="imagen de perfil">
                <p>${res.userName}</p>`;

                newPost.innerHTML = `<img src="">
                <input type="text" id= "postInput" class="postInput" placeholder="¡Hola! ¿Qué quieres compartir?">
                <button id="btnPost" class="btnShare">Publicar</button>`;

                homeEvents();
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
                document.getElementById('emptyInputPass').innerText = '*Su contraseña es incorrecta';
            }
        });
}