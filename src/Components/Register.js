export const register = () => {
    const registerTemplate = `
    <section class="registerLogin">
        <div>
            <h1 class="helpPotatoesTittle">Help Potatoes</h1>
            <p class="registerTittle">Registrate</p>
            <p class="pIconRegister">Elige el icono con el que te identifiques</p>
        </div>
        <div class="papasImg">
            <img src="./img/papamamá.png">
            <img src="./img/papapapá.png">
            <img src="./img/pape.png">
        </div>
        <div class="registerContainer">
            <div class= "inputContainerRegister">
                <input type="text" id="inputName" placeholder="Usuario">
                <input type="email" id="inputEmail" placeholder="Correo electrónico">
                <p id="errorEmail" class="error"></p>
                <input type="password" id="inputPassword"placeholder="Contraseña">
                <p id="passError" class="error"></p>
                <button id="buttonRegister" class="buttonnextPage">Registrar</button>
            </div>
            <div class="withGoogle">
            <p class="pGoogle">Registrate con Google</p>
            <img src="./img/googleLogo.png" alt="google logo" id="googleImg" class="logoGoogle">
            <p class="pGoogle">¿Ya tienes cuenta?</p>
            <button id="backLogin" class="backpage">Iniciar Sesión</button>
            </div>
            <section id="modalEmailV" class="verificationEmailModal" style="display:none">
            <div class="containerModal">
            <p>Para verificar tu correo revisa tu bandeja de entrada</p>
            <button class="okaybtnModal" id="closeModal">Aceptar</button>
            </div>
            </section>
            
        </div>
    </section>   
     `;





    return registerTemplate;
}