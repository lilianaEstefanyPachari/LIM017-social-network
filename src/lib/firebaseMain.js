//LINKS CONFIGURACIÓN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCkfzmelEoI-qm5eL4TiKDklOX6XizrGbg",
    authDomain: "help-potatoes.firebaseapp.com",
    projectId: "help-potatoes",
    storageBucket: "help-potatoes.appspot.com",
    messagingSenderId: "11463795081",
    appId: "1:11463795081:web:c699941c72cd05d539c158"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initilize FireStore
export const db = getFirestore(app);

//LINKS AUTH
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut
}
from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
export {
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
};

//LINKS FIRESTORE
import {
    collection,
    addDoc,
    serverTimestamp,
    getDocs,
    onSnapshot,
    query,
    orderBy
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

export {
    collection,
    addDoc,
    serverTimestamp,
    getDocs,
    onSnapshot,
    query,
    orderBy
}