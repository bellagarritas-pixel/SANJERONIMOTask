/*
 * Register View
 *
 * Responsabilidad:
 * - Mostrar la interfaz de registro.
 * - Capturar las acciones del usuario.
 * - Informar esas acciones al Presenter.
 *
 * NO contiene lógica de registro.
 */

export function showRegisterView(container, presenter) {
    container.innerHTML = `
        <section class="auth-container">
            <div class="auth-card">

                <header class="auth-header">
                    <h1> Crear cuenta </h1>
                    <p>Regístrate para comenzar en la IE San Jeronimo</p>
                </header>

                <form id="register-form" class="auth-form">

                 <form action="#" method="POST">
                  <label for="institucion">Institucion Educativa:</label>
  
                    <select name="institucion" id="institucion">
                     <option value="institucion">Seleciona tu Institucion Educativa</option>
                     <option value="san jeronimo">San Jeronimo</option>
                     <option value="otro">Otro</option>
                    </select>

                    
                 


                    <div class="form-group">
                        <label for="register-name">
                            Nombre
                        </label>

                        <input
                            type="text"
                            id="register-name"
                            name="name"
                            placeholder="Tu nombre"
                            required
                        >
                    </div>

                 <form action="#" method="POST">
                  <label for="usuario">Usuario:</label>
  
                    <select name="usuario" id="usuario">
                     <option value="usuario">Seleciona un tipo usuario</option>
                     <option value="profesor">Profesor</option>
                     <option value="estudiante">Estudiante</option>
                    </select>

                 <form action="#" method="POST">
                  <label for="genero">Genero:</label>
  
                    <select name="genero" id="genero">
                     <option value="genero">Seleciona tu genero</option>
                     <option value="hombre">Hombre</option>
                     <option value="mujer">Mujer</option>
                    </select>



                    <div class="form-group">
                        <label for="register-email">
                            Correo electrónico
                        </label>

                        <input
                            type="email"
                            id="register-email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="register-password">
                            Contraseña
                        </label>

                        <input
                            type="password"
                            id="register-password"
                            name="password"
                            placeholder="Crea una contraseña"
                            required
                        >
                    </div>

                     <label for="Activo">
                     Activo <br>
                      <input type="checkbox" id="Activo" name="Activo" value="si">
                     </label>

                    <button
                        type="submit"
                        class="button button-primary"
                    >
                        Crear cuenta
                    </button>

                </form>

                <div class="auth-footer">

                    <p>¿Ya tienes una cuenta?</p>

                    <button
                        id="show-login"
                        class="button button-link"
                        type="button"
                    >
                        Iniciar sesión
                    </button>

                </div>

                <p
                    id="register-message"
                    class="form-message"
                ></p>

            </div>
        </section>
    `;

    const registerForm =
        document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);

        const userData = {
            institucion: formData.get("institucion"),
            name: formData.get("name"),
            usuario:formData.get("usuario"),
            genero: formData.get("genero"),
            email: formData.get("email"),
            password: formData.get("password"),
            Activo: formData.get("Activo")
        };

        presenter.register(userData);
    });

    const loginButton =
        document.getElementById("show-login");

    loginButton.addEventListener("click", () => {
        presenter.showLogin();
    });
}

export function showRegisterMessage(message) {
    const messageElement =
        document.getElementById("register-message");

    if (messageElement) {
        messageElement.textContent = message;
    }
}