function Formulario() {
    return (
        <section>
            <h2>Registro</h2>

            <form>

                <lamel>Nombre</lamel>
                <input type="text" />

                <label>Correo</label>
                <input type="email" />

                <label>Contraseña</label>
                <input type="password" />

                <button type="submit">Registrarse</button>
                </form>
        </section>
    );
}

export default Formulario;