import { registerWithEmailFb, updateProfileWithEmailFb,loginFb, deletePostFb,getPostForEditFb,updatePostFb  } from '../../src/lib/firebaseMain';
import { createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword,deleteDoc,getDoc,updateDoc } from '../../src/lib/firebaseUtils';
jest.mock('../../src/lib/firebaseUtils.js');

//test
describe('testing registerWithEmailFb',() => {
 it('funciona y recibe los argumentos correctos', async () => {
  const result = await registerWithEmailFb('fakeEmail@gmail.com','fakePass');
  expect(JSON.stringify(result)).toBe(JSON.stringify({user: {email: "fakeEmail@gmail.com"}}));
  expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('fakeEmail@gmail.com');
  expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('fakePass');

 console.log(createUserWithEmailAndPassword.mock);
 });
 
});

//segundo test
describe('testing updateProfileWithEmailFb',() => {
  it('funciona y recibe los argumentos correctos', async () => {
   const result = await updateProfileWithEmailFb('random name','./img/pape.png');
  expect(updateProfile.mock.lastCall[1].displayName).toBe('random name');
  expect(updateProfile.mock.lastCall[1].photoURL).toBe('./img/pape.png');

     console.log(updateProfile.mock.lastCall[1].displayName);
    });
  
 });


 //tercer test
describe('testing loginFb',() => {
  it('funciona y recibe los argumentos correctos', async () => {
   const result = await loginFb('randomEmail@gmail.com','1234567');
   expect(JSON.stringify(result.user)).toBe(JSON.stringify({email: 'randomEmail@gmail.com',password: '1234567',emailVerified: true}));
   expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('randomEmail@gmail.com');
   expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('1234567');

 console.log(result.user);
  console.log(signInWithEmailAndPassword.mock);
  });
  
 });

  //cuarto test
describe('testing deletePostFb',() => {
  it('llama al serivico de firebase', async () => {
   const result = await deletePostFb('randomID');
   expect(deleteDoc).toHaveBeenCalled();
  });
  
 });
//quinto test
 describe('testing savePostfb',() => {
  it('llama al serivico de firebase', async () => {
   const result = await getPostForEditFb('randomID');
   expect(getDoc).toHaveBeenCalled();
  });
  
 });

 //sexto test
 describe('testing updatePostFb',() => {
  it('llama al serivico de firebase', async () => {
   const result = await updatePostFb('randomID','random content');
   expect(updateDoc).toHaveBeenCalled();
  });
  
 });







