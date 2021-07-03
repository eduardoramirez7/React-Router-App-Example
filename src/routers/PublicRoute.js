/* */
import { Redirect, Route } from 'react-router-dom';
import UseAuth from '../auth/UseAuth';

export default function PublicRoute({ component: Component, ...rest }) { 
    
    
    const auth = UseAuth();
    
    return (

        <Route {...rest}>
            {/* mostrar el copmponente solo si el usuario no esta autenticado, si no esta logueado si se va a mostrar
            importarlo en el AppRouter */}
            {!auth.isLogged() ? 
                <Component />
                :
                <Redirect to="/dashboard"/>
            }

        </Route>
    )
}

