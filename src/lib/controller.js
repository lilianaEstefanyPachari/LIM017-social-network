/* eslint-disable brace-style */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-cycle */
import {
  registerWithEmailFb,
  updateProfileWithEmailFb,
  sendEmailFb,
  registerWithGoogleFb,
  updateProfileWithGoogleFb,
  loginFb,
  logOutFb,
  savePostfb,
  onGetPostFb,
  deletePostFb,
  getPostForEditFb,
  updatePostFb,
  getCurrentUserFb,
} from './firebaseMain.js';

import { onNavigate } from '../routes.js';
import { loginEvents, homeEvents } from '../DOMevents.js';

export const registerWithEmail = (email, password, name, photo) => {
  return registerWithEmailFb(email, password)
    .then(() => {
      updateProfileWithEmailFb(name, photo);
      return sendEmailFb()
        .then(() => {
          const showModalEmailVerification = document.getElementById('modalEmailV');
          const hideModal = document.getElementById('closeModal');
          showModalEmailVerification.style.display = 'block';
          hideModal.addEventListener('click', () => {
            showModalEmailVerification.style.display = 'none';
          });
        });
    })
    .catch((error) => {
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
};
// variable global para estado de post
export let editStatus = false;
export const changeEditStatus = () => {
  editStatus = false;
};
export let docId = '';

export const seePost = () => {
  onGetPostFb((query) => {
    document.getElementById('postPublic').innerHTML = '';
    query.forEach((doc) => {
      // condición para monstrar opción de borrar y editar post
      const postUserId = doc.data().id;
      const currentUserId = getCurrentUserFb();
      if (postUserId === currentUserId) { document.getElementById('postPublic').innerHTML += `
      <div class="containerSeePost">
      <div class="divUserPhoto">
      <img class ="userPhotoPublic"src="${doc.data().photoURL}">
      <div class="divUserName">
      <p class="userNamePublic">${doc.data().name} </p>
      <p class="relleno"> ${doc.data().date.toDate().toDateString()},${doc.data().date.toDate().toLocaleTimeString()}</p>
      </div>
      </div>
      <div class="comentPost">
      <p class="userPostPublic">${doc.data().post} </p>
      </div>
      <div class="likeIcon">
      </div>
      <div class="containerOptions">
      <img src="./img/iconolike.png" class="btnLike"></img>
          <div>
              <img src="./img/iconoeliminar.png" class="btnDelete" data-id="${doc.id}"></img>
              <img src="./img/iconoeditar.png" class="btnEdit" data-id="${doc.id}"></img>
          </div>
      </div>
      `; }
      else {
        document.getElementById('postPublic').innerHTML += `
      <div class="containerSeePost">
      <div class="divUserPhoto">
      <img class ="userPhotoPublic"src="${doc.data().photoURL}">
      <div class="divUserName">
      <p class="userNamePublic">${doc.data().name} </p>
      <p class="relleno"> ${doc.data().date.toDate().toDateString()},${doc.data().date.toDate().toLocaleTimeString()}</p>
      </div>
      </div>
      <div class="comentPost">
      <p class="userPostPublic">${doc.data().post} </p>
      </div>
      <div class="likeIcon">
      </div>
      <div class="containerOptions">
      <img src="./img/iconolike.png" class="btnLike"></img>
          <div style= "display:none;">
              <img src="./img/iconoeliminar.png" class="btnDelete" data-id="${doc.id}"></img>
              <img src="./img/iconoeditar.png" class="btnEdit" data-id="${doc.id}"></img>
          </div>
      </div>
      `;
      }
      const containerPostPublic = document.getElementById('postPublic');
      const buttonDelete = containerPostPublic.querySelectorAll('.btnDelete');
      buttonDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          deletePostFb(e.target.dataset.id);
        });
      });
      const buttonEdit = containerPostPublic.querySelectorAll('.btnEdit');
      buttonEdit.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          getPostForEditFb(e.target.dataset.id)
            .then((doc) => {
              const postData = doc.data();
              document.querySelector('.postInput').value = postData.post;
              editStatus = true;
              docId = doc.id;
            });
        });
      });
    });
  });
};
export const registerWithGoogle = (photo) => {
  registerWithGoogleFb()
    .then(() => {
      updateProfileWithGoogleFb(photo);
      onNavigate('/home');
      const userProfile = document.getElementById('profileContainer');
      const newPost = document.getElementById('postContainer');
      userProfile.innerHTML = `<div class="containerPhotoProfile">
      <img src="./img/pape.png" alt="" class="iconUserDefault">
      </div>
      `;
      newPost.innerHTML = `
      <input type="text" class="postInput" placeholder="¡Hola! ¿Qué quieres compartir?">
      <button class="btnShare">Publicar</button>`;
      seePost();
      homeEvents();
    });
};
export const login = (email, password) => {
  return loginFb(email, password)
    .then((userCredential) => {
      if (userCredential.user.emailVerified === false) {
        logOutFb();
        onNavigate('/');
        loginEvents();
        const showModalLogin = document.getElementById('modalLogIn');
        const closeModalLogin = document.getElementById('closeModalLogIn');
        showModalLogin.style.display = 'block';
        closeModalLogin.addEventListener('click', () => {
          showModalLogin.style.display = 'none';
        });
      } else {
        onNavigate('/home');
        const userProfile = document.getElementById('profileContainer');
        const newPost = document.getElementById('postContainer');
        userProfile.innerHTML = `<div class="containerPhotoProfile">
        <img src="${userCredential.user.photoURL}" alt="imagen de perfil" class="userPhotoURLProfile">
        </div>`;
        newPost.innerHTML = `
        <input type="text"  class="postInput" placeholder="¡Hola! ¿Qué quieres compartir?">
        <button class="btnShare">Publicar</button>`;
        seePost();
        homeEvents();
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
        document.getElementById('emptyInputPass').innerText = '*Su contraseña es incorrecta';
      } else if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
        document.getElementById('emptyInputEmail').innerText = '*Su correo no está registrado';
      }
    });
};

// función de cerrar sesión
export const logOut = () => logOutFb();

// función de guardar post en firestore
export const savePost = (input) => {
  savePostfb(input)
    .then((docRef) => {
      console.log('Tu post ya esta en la nube', docRef.id);
    });
};

// función para actualizar post
export const updatePost = (id, newPost) => updatePostFb(id, newPost);
