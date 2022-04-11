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
                <input type="password" id="inputPassword">
                <button id="buttonRegister">Registrar</button>
                <p>Registrate con Google</p>
                <img src="" alt="google logo">
                <p>¿Ya tienes cuenta?</p>
                <button id="backLogin">Iniciar Sesión</button>
            </div>
        </div>
    </section>   
     `;





    return registerTemplate;
}