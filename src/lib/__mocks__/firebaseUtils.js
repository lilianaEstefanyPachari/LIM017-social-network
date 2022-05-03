export const initializeApp = () => ({});
export const getAuth = () => ({});
export const getFirestore = () => ({});
export const GoogleAuthProvider = jest.fn(() => {});
export const auth = {
    currentUser:{
        uid: 'fakeUserId',
        displayName: 'random name',
        email:'random@gmail.com',
        photoURL:'./src/pape.png',
    },
};
export const createUserWithEmailAndPassword = jest.fn((auth,email,pass) => Promise.resolve(
    {user:{email:email,},}
));
// export const updateProfile = jest.fn((displayName, photoURL) => Promise.resolve({}));
// const obj = { displayName: displayName, photoURL: photoURL, }
export const updateProfile = jest.fn((currentUser,{ displayName: displayName, photoURL: photoURL, }) => ({ }));

export const sendEmailVerification = () => Promise.resolve({});

export const signInWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve(
    {user:{
        email:email,
        password: password,
        emailVerified: true,
    } })

);

export const deleteDoc = jest.fn((docName) => Promise.resolve({}));
export const getDoc = jest.fn((docName) => Promise.resolve({}));
export const updateDoc = jest.fn((docData, newpost) => Promise.resolve({}));

export const doc = jest.fn((db,post,id) => Promise.resolve({}));
export const collection = jest.fn((db,collectionName) => Promise.resolve({}));
export const db = {};
export const serverTimestamp = () => Promise.resolve({});
export const signOut = jest.fn(() => Promise.resolve({}));



