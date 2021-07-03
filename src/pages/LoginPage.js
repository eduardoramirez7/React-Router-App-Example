// componente para el login

import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../auth/UseAuth";

export default function LoginPage() {

    /* Hooks */
    const history = useHistory();
    /* Cuando quiero iniciar sesion desde cierta pagina, debe redirigirme a esa pagina,
        para eso usar el Hook useLocation que trae la infomacion de la URL -> usarlo en PrivateRouter */
    const location = useLocation();
    const previusObjectURL = location.state?.from; //guarda un objeto de la url con toda la informacion y se usa en history.push(..)

    const auth = useAuth();

    const handleLogin = () => {
        auth.login(); //debemos hacer uso del Hook useAuth
        /* Cuando inicia sesion va directamente a la pagina privada de dashboard.
        si se intenta entrar desde otra pagina, se debe poder redireccionar a una pagina definida sino seria undefined*/
        history.push(previusObjectURL || "/dashboard");
        /* Cuando inicie sesion se debe poder inhabilitar las paginas de login y register, para eso crear PublicRoute en la
        carpeta routers*/
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={handleLogin}>
                SignIn
            </button>
        </div>
    )
    /* Para cerrar sesion ir a NavBar */
}
