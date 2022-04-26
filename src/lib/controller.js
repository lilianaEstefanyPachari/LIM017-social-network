import {
    getAuth,
    app,
    db,
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,

    //firestore

    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,

} from "./firebaseMain.js";

import { onNavigate } from "../routes.js";
import { loginEvents, homeEvents } from "../DOMevents.js";

const auth = getAuth(app);

export const registerWithEmail = (email, password, name, photo) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
        })
        .then(() => {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
            }).then(() => {
                // Profile updated!
                console.log('ya actualice tu nombre y foto');
            }).catch((error) => {
                // An error occurred
                console.log('error al actualizar');
            });
            sendEmailVerification(auth.currentUser)
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

};


export const registerWithGoogle = (photo) => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
        .then((result) => {
            updateProfile(auth.currentUser, {
                photoURL: photo,
            }).then(() => {
                // Profile updated!
                console.log('ya actualice tu nombre y foto de google');
            }).catch((error) => {
                // An error occurred
                console.log('error al actualizar');
            });;
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            const userData = {
                userName: user.displayName,
                userState: user.emailVerified,
                userPhoto: user.photoURL,
                userUid: user.uid
            }
            return userData;

        }).then(() => {
            onNavigate('/home');
            const userProfile = document.getElementById('profileContainer');
            const newPost = document.getElementById('postContainer');

            userProfile.innerHTML = `<div class="containerPhotoProfile">
                <img src="./img/pape.png" alt="" class="iconUserDefault">
                </div>
                `
            newPost.innerHTML = `
                <input type="text" class="postInput" placeholder="¡Hola! ¿Qué quieres compartir?">
                <button class="btnShare">Publicar</button>`;
            seePost();
            // console.log('llego hasta aquí')
            homeEvents();
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        });

};

//función de cerrar sesión
export const logOut = () => {
    console.log('estoy entrando');
    return signOut(auth)
        .then(() => {
            console.log('Se esta cerrando la sesion')
                // Sign-out successful.
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // An error happened.
        });
}

export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            console.log('logueado con exito')
            const userData = {
                userName: user.displayName,
                userState: user.emailVerified,
                userPhoto: user.photoURL,
                userUid: user.uid
            }
            return userData;
        })
        .then((res) => {
            console.log(res)
            if (res.userState === false) {
                logOut();
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

                userProfile.innerHTML = `<div class="containerPhotoProfile">
                <img src="${res.userPhoto}" alt="imagen de perfil" class="userPhotoURLProfile">
                </div>`;

                newPost.innerHTML = `
                <input type="text"  class="postInput" placeholder="¡Hola! ¿Qué quieres compartir?">
                <button class="btnShare">Publicar</button>`;
                seePost();
                homeEvents();
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
                document.getElementById('emptyInputPass').innerText = '*Su contraseña es incorrecta';
            } else if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
                document.getElementById('emptyInputEmail').innerText = '*Su correo no está registrado';
            }
        });
};

//función de guardar post en firestore 
export const savePost = (input) => {
    const user = auth.currentUser;
    console.log(user);
    return addDoc(collection(db, "post"), {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        post: input,
        photoURL: user.photoURL,
        date: serverTimestamp()
    }).then((docRef) => {
        console.log("Tu post ya esta en la nube", docRef.id);
    }).catch((e) => {
        console.error("Error adding document: ", e);

    });
};

//AÑADIENDO AQUÍ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//funciónpara actualización de post en timepo real
export const onGetPost = (callback) => onSnapshot(query(collection(db, "post"), orderBy('date', 'desc')), callback);

//fuincion para elimnar
export const deletePost = (id) => deleteDoc(doc(db, "post", id));

//Función para editar post 
export const getPostForEdit = (id) => getDoc(doc(db, "post", id));
//variable global para esatdo de post
export let editStatus = false;
export const changeEditStatus = () => {
    editStatus = false;
}
export let docId = '';
//función para actualizar post
export const updatePost = (id, newPost) => updateDoc(doc(db, "post", id), newPost);

export const seePost = () => {
    return onGetPost((query) => {
        document.getElementById('postPublic').innerHTML = '';
        query.forEach((doc) => {
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
                <div class="optionHide  ${doc.id}" style="display:none;">
                    <img src="./img/iconoeliminar.png" class="btnDelete" data-id="${doc.id}"></img>
                    <img src="./img/iconoeditar.png" class="btnEdit" data-id="${doc.id}"></img>
                </div>
            </div>
            `
            console.log(`${doc.data().date.toDate()}`);
            const postUserId = doc.data().id;
            if (postUserId === auth.currentUser.uid) {
                const option = document.querySelector(`.${doc.id}`);
                option.style.display = 'block';
            };


            const containerPostPublic = document.getElementById('postPublic');
            const buttonDelete = containerPostPublic.querySelectorAll('.btnDelete');
            buttonDelete.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    deletePost(e.target.dataset.id);
                })
            });
            const buttonEdit = containerPostPublic.querySelectorAll('.btnEdit');
            buttonEdit.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    getPostForEdit(e.target.dataset.id)
                        .then((doc) => {
                            const postData = doc.data();
                            document.querySelector(".postInput").value = postData.post;
                            editStatus = true;
                            docId = doc.id;
                        })
                })
            })
        });
    })
};