// componente para almacenar en un texto
import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext(); //sirve para poder consumirlo desde los componentes que necesiten acceder a dicho contexto

/* Se crea el componente AuthProvider y envolverlo en toda la aplicacion (colocarlo en el punto mas alto), 
para eso colocarlo en App.js.
children propiedad especial, dentro de value estara la informacion que le vamos a pasar a los demas comkponentes*/
const AuthProvider = ({children}) => {

    /* Estado que almacena el valor dinamico de los usuarios, en la primera carga de la aplic. el usuario no estara logueado (null)
    useState debe importarse */
    const [user, setUser] = useState(
        /* Obntener los datos del localstorrage, user es la clave del localstorage */
        JSON.parse(localStorage.getItem('user')) || null //null para la primera autenticacion
    );

    /* Para guardar los datos en el localstoage, creando un Hook que se va ejecutar cada que el estado user cambie*/
    useEffect(() => {
        /* Se pueden presentar fallos con el localStorage debido a almacenamiento lleno, o borrado del localStorage...
        para esto envolverlo en try - catch */
        try {
            localStorage.setItem("user", JSON.stringify(user)); // (clave del localstorage, dato que almacena en la clave(String))
        } catch (error) {
            /* Para no generar conflicto la proxima vez que se requiera usar */
            localStorage.removeItem("user");
        }
        
    }, [user])


    const contextValue = {
        /* funciones */
        user,   
        login(){
            /* Actualiza el estado user */
            setUser({id:1, username: "Eduardo"})
        },
        logout(){
            setUser(null)
        },
        /* Para comprobar si el usuario esta autenticado */
        isLogged(){
            return !!user; /* si es nulo la doble negacion retorna False si existe retorna True, llamarlo en PrivateRoute */
        }
    }

    /* objeto con informacion del usuario */


    return <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>

}


export default AuthProvider; //se coloca en un punto alto de la aplicacion para suministrarlo a los demas componentes