export const login = () => {
    const loginTemplate = `
      <section class="loginContainer">
         <div>
            <h1> Help Potatoes</h1>
         </div>
         <div class="inputContainer"> 
           <p>Iniciar sesion</p>
           <div>
           <input type="text" placeholder="Correo electronico" id="inputEmail">
           <input type="text" placeholder="Contraseña" id="inputPass">
           <button id="loginBtn"> Iniciar Sesion </button>
           <p>Iniciar sesion con google</p>
           <img src="" alt="google logo">
           <p>¿No tienes Cuenta?</p>
           <button id="registerP" class="register">Registrate</button>
           </div>
         </div>
      </section>
    `;


    return loginTemplate;
}