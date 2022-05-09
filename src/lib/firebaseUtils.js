// LINKS CONFIGURACIÓN
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
export { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

// LINKS AUTH
export {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
}
  from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

<<<<<<< HEAD
// LINK  FIRESTORE
=======
// LINKS FIRESTORE
>>>>>>> 22f8f62990f356375899352a1280488180cafd26
export {
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
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
