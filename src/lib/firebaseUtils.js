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
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

// LINKS FIRESTORE
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
