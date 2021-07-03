/* contexto que permite consumir el contenido del contexto (AuthProvider)
para consumir un contexto usar el useContext */
import {useContext} from 'react';
import {AuthContext} from './AuthProvider';

export default function UseAuth() {

    //const contextValue = useContext(AuthContext);/* Pasamos el contexto que queremos consumir */
    //return contextValue; /* entregamos el contextValue */
    //lo anterior se resume en la linea siguiente
    return useContext(AuthContext); // trae el context que tiene user, login y logout ... ahora ir a PrivateRoute
}

