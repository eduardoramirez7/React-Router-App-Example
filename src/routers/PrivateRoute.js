/* el objetivo es retornar una ruta creamos <Route>, importar react-router-dom*/
import { Redirect, Route, useLocation } from 'react-router-dom';
import UseAuth from '../auth/UseAuth';

/* Se necesita definir si un usuario es nulo o tiene datos */
//const user = null;
//const user = { id: 1, username: "Eduardo" }

export default function PrivateRoute({ component: Component, ...rest }) { //rest: contiene todos los productos de las props
    
    /* Una vez creado el contexto AuthProvider podemos traer directramente el contexto del user 
    auth tendria todo el objeto (user, login, logout) y se agrega auth a Route */
    const auth = UseAuth();
    const location = useLocation(); //para guardar la url de la ultima ruta visitada
    
    
    return (
        /*  <Route exact={props.exact} path={props.path} component={props.component} /> //se debe importar en el AppRouter 
        lo anterior se puede destructurar y traer todos los parametros de rest excepto el component y 
        renderizar component dentro de Route siempre y cuando en este caso este autenticado*/
        <Route {...rest}>
            {/* Comprobar si el usuario existe, si existe se retorna el componente, sino redirigir al login usando 
            Redirect -> debe importarse (FIN)*/}
            {auth.isLogged() ? 
                <Component />
                :
                <Redirect to={{pathname: "/login", state: {from: location}}}/>
            }
            {/* despues de FIN Ahora ir a LoginPage */}
        </Route>
    )
}
/* Se crea la carpeta auth para la parte de autenticacion */
