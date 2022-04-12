export const login = () => {
    const loginTemplate = `
      <section class="loginContainer">
         <div class="helpPotatoesTittle">
            <h1> Help Potatoes</h1>
         </div>
         <div class="loginContainer"> 
           <p class="loginTittle">Iniciar sesión</p>
           <div class="inputContainer">
           <input type="text" placeholder="Correo electrónico" id="inputEmail">
           <input type="text" placeholder="Contraseña" id="inputPass">
           <button id="loginBtn" class="buttonnextPage"> Iniciar Sesión </button>
           </div>
           <div class="withGoogle">
           <p class="pGoogle">Iniciar sesión con google</p>
           <img src="./img/googleLogo.png" class="logoGoogle">
           <p class="pGoogle">¿No tienes cuenta?</p>
           <button id="registerP" class="backpage">Regístrate</button>
           </div>
         </div>
      </section>
    `;


    return loginTemplate;
}