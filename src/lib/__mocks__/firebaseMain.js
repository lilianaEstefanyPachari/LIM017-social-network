//Iniciar sesión con email y contraseña
export const loginFb = jest.fn((email, password) => Promise.resolve({
    user:{
        emailVerified: true,
    }
}));