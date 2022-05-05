import {
  initializeApp,
  getFirestore,
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  // firestore
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
} from './firebaseUtils.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCkfzmelEoI-qm5eL4TiKDklOX6XizrGbg',
  authDomain: 'help-potatoes.firebaseapp.com',
  projectId: 'help-potatoes',
  storageBucket: 'help-potatoes.appspot.com',
  messagingSenderId: '11463795081',
  appId: '1:11463795081:web:c699941c72cd05d539c158',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Initilize FireStore
const db = getFirestore(app);

// funcion para registrar nuevo usuario
export const registerWithEmailFb = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};

// actualizar perfil de usuario registrado con email
export const updateProfileWithEmailFb = (name, photo) => {
  updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  });
};

// enviar email de verificación
export const sendEmailFb = () => sendEmailVerification(auth.currentUser);

// registarse con google (LogInWithGoogle too)
const provider = new GoogleAuthProvider();

export const registerWithGoogleFb = () => signInWithPopup(auth, provider);

// actualizar perfil de usuario registrado con google
export const updateProfileWithGoogleFb = (photo) => {
  updateProfile(auth.currentUser, {
    photoURL: photo,
  });
};

// Iniciar sesión con email y contraseña
export const loginFb = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

// función de cerrar sesión
export const logOutFb = () => signOut(auth);

// Crear nuevo post y subir a la nube/data de firestore
export const savePostfb = (input) => {
  const user = auth.currentUser;
  return addDoc(collection(db, 'post'), {
    id: user.uid,
    name: user.displayName,
    email: user.email,
    post: input,
    photoURL: user.photoURL,
    date: serverTimestamp(),
  });
};

// Obtener data de usuario
export const getCurrentUserFb = () => {
  const user = auth.currentUser.uid;
  return user;
};
// actulizar data/post en tiempo real y en orden descendente
export const onGetPostFb = (callback) => onSnapshot(query(collection(db, 'post'), orderBy('date', 'desc')), callback);

// función para eliminar post
export const deletePostFb = (id) => deleteDoc(doc(db, 'post', id));

// Función para editar post
export const getPostForEditFb = (id) => getDoc(doc(db, 'post', id));

// función para actualizar post v1
export const updatePostFb = (id, newPost) => updateDoc(doc(db, 'post', id), newPost);

// función para actualizar post v2 con async y await
// export const updatePostFb = async (id, newPost) => {
//     const result = await doc(db, "post", id);
//     return updateDoc(result, newPost);
// }
