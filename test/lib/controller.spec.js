const fs = require('fs');
document.body.innerHTML = fs.readFileSync('./src/index.html');

// importamos la funcion que vamos a testear
const { registerWithEmail } = require('../../src/lib/controller.js');

import { registerWithEmailFb, sendEmailFb } from '../../src/lib/firebaseMain.js';
import { createUserWithEmailAndPassword } from '../../src/lib/firebaseUtils.js';

//darle la ruta del archivo a mockear
jest.mock('../../src/lib/firebaseUtils.js');

// //test
// describe('registerWithEmail testing', () => {
//     it('debe ser una función', () => {
//         expect(typeof registerWithEmail).toBe('function');
//     });
// });

// describe('registerWithEmailFb testing', () => {
//     it('debe llamar a la funcion con los argumentos esperados', () => {
//         console.log('pruebaaa test', registerWithEmailFb('lili@gmail.com', '123456'))

//     })
// });

// describe('registerWithEmail testing', () => {
//     it('debe ser una función', () => {
//         expect(typeof registerWithEmail).toBe('function');
//     });
//     it('debe guardarse el email en la data de firebase', () => {
//         registerWithEmailFb('liliana16@gamil.com', '1234567')
//             .then((email, password) => {

//             })
//     })
// });
describe('registerWithEmail testing', () => {
    it('debe ser una función', () => {
        expect(typeof registerWithEmail).toBe('function');
    });
    it('debe guardar el nombre de usuario', () => {
        const fs = require('fs');
        document.body.innerHTML = fs.readFileSync('./src/Components/register.js');
        // const btnRegister = document.getElementById('buttonRegister');
        // const click = new Event('click');
        // btnRegister.dispatchEvent(click);
        const user = document.getElementById('inputName').value
        registerWithEmailFb(user).then((user) => {
            //expect(updateProfileWithEmail).toHaveBeenCalled();
            expect(updateProfileWithEmail(user)).mockResolveValue({ userName: user })
        }).catch(() => {
            expect(Error)
        })
    })
    it('debe abrir un modal cuando el email de verificación esté enviado', () => {
        registerWithEmailFb().then(() => {
            expect(sendEmailVerification).toHaveBeenCalled()
            sendEmailFb().then(() => {
                const btnRegister = document.getElementById('buttonRegister');
                const showModalEmailVerification = document.getElementById('modalEmailV');
                const hideModal = document.getElementById('closeModal');
                const click = new Event('click');
                btnRegister.dispatchEvent(click, () => {
                    expect(showModalEmailVerification.style.display = 'block')
                });
                hideModal.dispatchEvent(click, () => {
                    expect(showModalEmailVerification.style.display = 'none')
                })
            })
        }).catch(() => {
            expect(Error)
        })
    })
});