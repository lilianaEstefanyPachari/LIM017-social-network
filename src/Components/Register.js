export const register = () => {
    const registerTemplate = `
    <section class="registerLogin">
        <div>
            <h1>Help Potatoes</h1>
        </div>
        <div>
            <img src="">
            <img src="">
            <img src="">
            <img src="">
            <img src="">
        </div>
        <div class="registerContainer">
            <p>Registrate</p>
            <div>
                <input type="text" id="inputName" placeholder="Usuario">
                <input type="email" id="inputEmail" placeholder="Correo electrónico">
                <p id="errorEmail" class="error"></p>
                <input type="password" id="inputPassword">
                <p id="passError" class="error"></p>
                <button id="buttonRegister">Registrar</button>
                <section id="modalEmailV" class="verificationEmailModal" style="display:none">
                <p>Para verificar tu correo revisa tu bandeja de entrada
                </p>
                </section>
                <p>Registrate con Google</p>
                <img src="" alt="google logo" id="googleImg">
                <p>¿Ya tienes cuenta?</p>
                <button id="backLogin">Iniciar Sesión</button>
            </div>
        </div>
    </section>   
     `;





    return registerTemplate;
}