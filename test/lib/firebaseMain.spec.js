import {
  registerWithEmailFb,
  updateProfileWithEmailFb,
  updateProfileWithGoogleFb,
  sendEmailFb,
  registerWithGoogleFb,
  loginFb,
  deletePostFb,
  getPostForEditFb,
  updatePostFb,
  savePostfb,
  getCurrentUserFb,
  logOutFb,
} from '../../src/lib/firebaseMain';

import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  signInWithEmailAndPassword,
  deleteDoc,
  getDoc,
  updateDoc,
  addDoc,
  signOut,
} from '../../src/lib/firebaseUtils';

jest.mock('../../src/lib/firebaseUtils.js');

// test
describe('testing registerWithEmailFb', () => {
  it('funciona y recibe los argumentos correctos', async () => {
    const result = await registerWithEmailFb('fakeEmail@gmail.com', 'fakePass');
    expect(JSON.stringify(result)).toBe(JSON.stringify({ user: { email: 'fakeEmail@gmail.com' } }));
    expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('fakeEmail@gmail.com');
    expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('fakePass');

    console.log(createUserWithEmailAndPassword.mock);
  });
});

// segundo test
describe('testing updateProfileWithEmailFb', () => {
  it('funciona y recibe los argumentos correctos', async () => {
    const result = await updateProfileWithEmailFb('random name', './img/pape.png');
    expect(typeof result).toBe('object');
    expect(updateProfile.mock.lastCall[1].displayName).toBe('random name');
    expect(updateProfile.mock.lastCall[1].photoURL).toBe('./img/pape.png');

    console.log(updateProfile.mock.lastCall[1].displayName);
  });
});

// tercer test
describe('testing updateProfileWithGoogleFb', () => {
  it('funciona y recibe los argumentos correctos', async () => {
    const result = await updateProfileWithGoogleFb('./img/pape.png');
    expect(typeof result).toBe('object');
    expect(updateProfile.mock.lastCall[1].photoURL).toBe('./img/pape.png');

    console.log(updateProfile.mock);
  });
});

// cuarto test
describe('testing sendEmailFb', () => {
  it('llama al serivico de firebase', async () => {
    const result = await sendEmailFb();
    expect(sendEmailVerification).toHaveBeenCalled();
    expect(typeof result).toBe('object');
  });
});

// quinto test
describe('testing loginFb', () => {
  it('funciona y recibe los argumentos correctos', async () => {
    const result = await loginFb('randomEmail@gmail.com', '1234567');
    expect(JSON.stringify(result.user)).toBe(JSON.stringify({ email: 'randomEmail@gmail.com', password: '1234567', emailVerified: true }));
    expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('randomEmail@gmail.com');
    expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('1234567');

    console.log(result.user);
    console.log(signInWithEmailAndPassword.mock);
  });
});

// sexto test
describe('testing savePostfb', () => {
  it('llama al serivico de firebase', async () => {
    const result = await savePostfb('the new post');
    expect(addDoc).toHaveBeenCalled();
    expect(result).toStrictEqual({
      id: 'fakeUserId',
      name: 'random name',
      email: 'random@gmail.com',
      post: 'the new post',
      photoURL: './src/pape.png',
      date: {},
    });
  });
});

// septimo test
describe('testing getPostForEditFb', () => {
  it('llama al serivico de firebase', async () => {
    const result = await getPostForEditFb('randomID');
    expect(getDoc).toHaveBeenCalled();
    expect(getDoc.mock.calls).toHaveLength(1);
    expect(typeof result).toBe('object');

    console.log(result);
  });
});

// octavo test
describe('testing updatePostFb', () => {
  it('llama al serivico de firebase', async () => {
    const result = await updatePostFb('randomID', { post: 'new update content' });
    expect(updateDoc).toHaveBeenCalled();
    expect(result).toStrictEqual({ post: 'new update content' });
    expect(updateDoc.mock.calls).toHaveLength(1);
  });
});

// noveno test
describe('testing deletePostFb', () => {
  it('llama al serivico de firebase', async () => {
    const result = await deletePostFb('randomID');
    expect(typeof result).toBe('object');
    expect(deleteDoc).toHaveBeenCalled();
  });
});

// decimo test
describe('testing registerWithGoogleFb', () => {
  it('llama al serivico de firebase', async () => {
    const result = await registerWithGoogleFb();
    expect(signInWithPopup).toHaveBeenCalled();
    expect(signInWithPopup.mock.calls).toHaveLength(1);
    expect(typeof result).toBe('object');
  });
});

// test
describe('testing getCurrentUserFb', () => {
  it('llama al serivico de firebase', () => {
    const result = getCurrentUserFb();
    expect(result).toBe('fakeUserId');
  });
});

// test
describe('testing  logOutFb', () => {
  it('llama al serivico de firebase', async () => {
    const result = await logOutFb();
    expect(typeof result).toBe('object');
    expect(signOut).toHaveBeenCalled();
    expect(signOut.mock.calls).toHaveLength(1);
  });
});

