/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable no-useless-rename */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable object-shorthand */
/* eslint-disable arrow-body-style */
export const initializeApp = () => ({});
export const getAuth = () => {
  return {
    currentUser: {
      uid: 'fakeUserId',
      displayName: 'random name',
      email: 'random@gmail.com',
      photoURL: './src/pape.png',
    },
  };
};
export const getFirestore = () => ({});
export const GoogleAuthProvider = jest.fn(() => {});
export const auth = {
  currentUser: {
    uid: 'fakeUserId',
    displayName: 'random name',
    email: 'random@gmail.com',
    photoURL: './src/pape.png',
  },
};
export const createUserWithEmailAndPassword = jest.fn((auth, email, pass) => Promise.resolve(
  { user: { email: email } },
));
// export const updateProfile = jest.fn((displayName, photoURL) => Promise.resolve({}));
// const obj = { displayName: displayName, photoURL: photoURL, }
export const updateProfile = jest.fn((currentUser, { displayName: displayName, photoURL: photoURL, }) => ({ }));

export const sendEmailVerification = jest.fn((obj) => Promise.resolve({}));

export const signInWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve(
  {
    user: {
      email: email,
      password: password,
      emailVerified: true,
    },
  },
));

export const signInWithPopup = jest.fn((auth, provider) => Promise.resolve({}));

export const db = {};
export const deleteDoc = jest.fn((docName) => Promise.resolve({}));
export const getDoc = jest.fn((docName) => Promise.resolve({}));
export const updateDoc = jest.fn((docData, newpost) => Promise.resolve(newpost));
export const addDoc = jest.fn((collection, values) => Promise.resolve(values));

export const doc = jest.fn((db, post, id) => Promise.resolve({}));
export const collection = jest.fn((db, collectionName) => Promise.resolve({}));

export const serverTimestamp = () => { return {}; };
export const signOut = jest.fn(() => Promise.resolve({}));
