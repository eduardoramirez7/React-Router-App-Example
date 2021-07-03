//va crear el menu de navegacion entre rutas
//para evitar recargar toda la pagina, sino lo el componente que se necesita
//importar react-router-dom y colocar Link y to
//Para activar o mostrar sobre que pagina se encuentra ir a CSS y agregar activeClass en Link, ademas agregar NavLink

import { NavLink } from "react-router-dom";
import UseAuth from "../auth/UseAuth";

export default function Navbar() {

    const auth = UseAuth();

    return (
        <nav>
            {/* Creamos una lista */}
            <ul>
                {/* Menu de navegacion */}
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink exact to="/contact" activeClassName="active">Contact</NavLink></li>
                <li><NavLink to="/categories" activeClassName="active">Categories</NavLink></li>

                {!auth.isLogged() && (
                    <>
                        <li><NavLink exact to="/login" activeClassName="active">Login</NavLink></li>
                        <li><NavLink exact to="/register" activeClassName="active">Register</NavLink></li>
                    </>
                )}


                {/* para ocultar las rutas cuando un usuario esta logueado */}
                {auth.isLogged() && (
                    <>
                        <li><NavLink exact to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
                        <li><NavLink exact to="/payments" activeClassName="active">Payments</NavLink></li>
                        <li><button onClick={auth.logout}>Logout</button></li> {/* Debemos recibir el auth, entonces importarlo */}
                    </>

                )}

            </ul>
        </nav>
    )
}
